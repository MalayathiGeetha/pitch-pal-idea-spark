
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { transcript } = await req.json()
    
    if (!transcript) {
      return new Response(
        JSON.stringify({ error: 'Transcript is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const openAIApiKey = Deno.env.get('OPENAI_API_KEY')
    if (!openAIApiKey) {
      return new Response(
        JSON.stringify({ error: 'OpenAI API key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const prompt = `You are an expert pitch deck consultant. Transform the following startup transcript into a compelling pitch deck using Guy Kawasaki's 10-slide framework.

For the one-liner, use this exact format: "{Name of company} is a {product} for {Ideal Customer} to {desired outcome} with {special sauce}"

Create exactly 10 slides with the following structure:
1. Problem - What pain point are you solving?
2. Solution - How do you solve the problem?
3. Market Size - How big is the opportunity?
4. Business Model - How do you make money?
5. Competition - Who are your competitors and how are you different?
6. Marketing - How will you reach customers?
7. Team - Who are the key team members?
8. Projections - What are your financial projections?
9. Funding - How much money do you need and what for?
10. Timeline - What are your key milestones?

For each slide, also suggest an appropriate image that would visually represent the content.

Transcript: "${transcript}"

Respond in this JSON format:
{
  "oneLiner": "Company one-liner using the specified format",
  "pitchStructure": [
    {
      "title": "Problem",
      "content": "Detailed content for this slide",
      "imageDescription": "Suggested image description for this slide"
    },
    ... (continue for all 10 slides)
  ]
}`

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are an expert pitch deck consultant specializing in Guy Kawasaki\'s proven framework. Always respond with valid JSON.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 2000,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('OpenAI API error:', error)
      return new Response(
        JSON.stringify({ error: 'Failed to generate pitch' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const data = await response.json()
    const content = data.choices[0].message.content

    try {
      const pitchData = JSON.parse(content)
      
      return new Response(
        JSON.stringify(pitchData),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    } catch (parseError) {
      console.error('Failed to parse OpenAI response:', parseError)
      console.error('Raw content:', content)
      
      return new Response(
        JSON.stringify({ error: 'Failed to parse pitch data' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
