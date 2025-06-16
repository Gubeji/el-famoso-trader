
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Activity, AlertCircle } from 'lucide-react';

const MarketSentiment = () => {
  const sentimentData = {
    overall: 'Bullish',
    score: 72,
    fearGreedIndex: 68,
    volatility: 'Medium'
  };

  const newsItems = [
    {
      id: 1,
      headline: 'Bitcoin supera los $44,000 tras adopción institucional',
      sentiment: 'positive',
      source: 'CoinDesk',
      time: '15 min ago',
      impact: 'High'
    },
    {
      id: 2,
      headline: 'Ethereum presenta mejoras en escalabilidad',
      sentiment: 'positive',
      source: 'CoinTelegraph',
      time: '32 min ago',
      impact: 'Medium'
    },
    {
      id: 3,
      headline: 'Regulaciones cripto en discusión en el Congreso',
      sentiment: 'neutral',
      source: 'Reuters',
      time: '1 hour ago',
      impact: 'High'
    },
    {
      id: 4,
      headline: 'Altcoins muestran resistencia ante corrección',
      sentiment: 'positive',
      source: 'Crypto News',
      time: '2 hours ago',
      impact: 'Medium'
    }
  ];

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return 'text-emerald-400 bg-emerald-400/20 border-emerald-400/30';
      case 'negative':
        return 'text-red-400 bg-red-400/20 border-red-400/30';
      default:
        return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
    }
  };

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return <TrendingUp className="h-4 w-4" />;
      case 'negative':
        return <TrendingDown className="h-4 w-4" />;
      default:
        return <Activity className="h-4 w-4" />;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High':
        return 'text-red-400';
      case 'Medium':
        return 'text-yellow-400';
      default:
        return 'text-slate-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Sentiment Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Sentimiento General</p>
                <p className="text-2xl font-bold text-emerald-400">{sentimentData.overall}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-emerald-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Score</p>
                <p className="text-2xl font-bold text-white">{sentimentData.score}/100</p>
              </div>
              <Activity className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Fear & Greed</p>
                <p className="text-2xl font-bold text-yellow-400">{sentimentData.fearGreedIndex}</p>
              </div>
              <AlertCircle className="h-8 w-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm">Volatilidad</p>
                <p className="text-2xl font-bold text-white">{sentimentData.volatility}</p>
              </div>
              <Activity className="h-8 w-8 text-slate-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* News Feed */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Noticias del Mercado</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {newsItems.map((news) => (
              <div
                key={news.id}
                className="p-4 bg-slate-700/50 rounded-lg border border-slate-600 hover:bg-slate-700/70 transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-white font-medium text-sm leading-relaxed flex-1">
                    {news.headline}
                  </h3>
                  <div className="flex items-center space-x-2 ml-4">
                    <Badge className={getSentimentColor(news.sentiment)}>
                      {getSentimentIcon(news.sentiment)}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-slate-400">
                    <span>{news.source}</span>
                    <span>•</span>
                    <span>{news.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-slate-400">Impacto:</span>
                    <span className={`text-xs font-medium ${getImpactColor(news.impact)}`}>
                      {news.impact}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MarketSentiment;
