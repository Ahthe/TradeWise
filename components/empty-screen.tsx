import { UseChatHelpers } from 'ai/react'
import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-4 border bg-background p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">
          Welcome to TradeWise!
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          We at FalconX Group are thrilled to introduce TradeWise, our cutting-edge AI-powered trading assistant. 
          TradeWise leverages advanced function calling to provide real-time TradingView stock market widgets, 
          offering you unparalleled insights into the financial markets.
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Powered by{' '}
          <ExternalLink href="https://sdk.vercel.ai">Vercel AI SDK</ExternalLink>,{' '}
          <ExternalLink href="https://tradingview.com">TradingView Widgets</ExternalLink>,
          and{' '}
          <ExternalLink href="https://groq.com">Llama-3.1-70b via Groq</ExternalLink>
        </p>
      </div>
    </div>
  )
}