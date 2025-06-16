
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingUp, TrendingDown, AlertTriangle, Bot, Activity, DollarSign } from 'lucide-react';
import ProbabilityGauge from '@/components/ProbabilityGauge';
import AlertsTable from '@/components/AlertsTable';
import CryperAgent from '@/components/CryperAgent';
import PortfolioOverview from '@/components/PortfolioOverview';
import MarketSentiment from '@/components/MarketSentiment';

const Index = () => {
  const [activeAlert, setActiveAlert] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Activity className="h-8 w-8 text-emerald-400" />
                <h1 className="text-2xl font-bold text-white">EFT - El Famoso Trader</h1>
              </div>
              <Badge variant="outline" className="text-emerald-400 border-emerald-400">
                LIVE
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-slate-400">Balance Total</p>
                <p className="text-xl font-bold text-white">$12,547.89</p>
              </div>
              <div className="h-8 w-px bg-slate-600"></div>
              <div className="text-right">
                <p className="text-sm text-slate-400">PnL 24h</p>
                <p className="text-xl font-bold text-emerald-400">+$234.56</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Main Dashboard */}
          <div className="lg:col-span-8 space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">Señales Activas</p>
                      <p className="text-2xl font-bold text-white">7</p>
                    </div>
                    <AlertTriangle className="h-8 w-8 text-yellow-400" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">Acierto Hoy</p>
                      <p className="text-2xl font-bold text-emerald-400">87%</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-emerald-400" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">ROI Mensual</p>
                      <p className="text-2xl font-bold text-emerald-400">+23.4%</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-emerald-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Probability Gauge */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Bot className="h-5 w-5 text-emerald-400" />
                  <span>Probabilidad IA - Siguiente Movimiento</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ProbabilityGauge />
              </CardContent>
            </Card>

            {/* Tabs Section */}
            <Tabs defaultValue="alerts" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-slate-800/50">
                <TabsTrigger value="alerts" className="text-slate-300 data-[state=active]:text-white">
                  Alertas Activas
                </TabsTrigger>
                <TabsTrigger value="portfolio" className="text-slate-300 data-[state=active]:text-white">
                  Cartera
                </TabsTrigger>
                <TabsTrigger value="sentiment" className="text-slate-300 data-[state=active]:text-white">
                  Sentimiento
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="alerts" className="mt-6">
                <AlertsTable />
              </TabsContent>
              
              <TabsContent value="portfolio" className="mt-6">
                <PortfolioOverview />
              </TabsContent>
              
              <TabsContent value="sentiment" className="mt-6">
                <MarketSentiment />
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Cryper Agent */}
          <div className="lg:col-span-4">
            <CryperAgent />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
