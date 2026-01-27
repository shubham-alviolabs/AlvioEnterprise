import React from 'react';
import { TrendingUp, Users, DollarSign, Package, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react';

interface MockAppInterfaceProps {
  type: 'dashboard' | 'crm' | 'portal';
  hoveredCard: number | null;
  setHoveredCard: (index: number | null) => void;
  animatedStats: { revenue: number; users: number; conversion: number };
}

export const MockAppInterface: React.FC<MockAppInterfaceProps> = ({
  type,
  hoveredCard,
  setHoveredCard,
  animatedStats
}) => {
  if (type === 'dashboard') {
    return (
      <>
        <div className="h-10 rounded-t-2xl bg-gradient-to-r from-gray-200/80 to-gray-300/80 dark:from-white/20 dark:to-white/10 border-b border-gray-300 dark:border-white/20 flex items-center px-4 gap-2 backdrop-blur-xl">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400 hover:scale-125 transition-transform cursor-pointer" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 hover:scale-125 transition-transform cursor-pointer" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400 hover:scale-125 transition-transform cursor-pointer" />
          </div>
          <div className="flex-1 h-5 rounded bg-gray-300/50 dark:bg-white/5 ml-4 flex items-center px-2">
            <span className="text-[8px] text-gray-500 dark:text-gray-400">analytics.mycompany.com</span>
          </div>
        </div>

        <div className="h-[calc(100%-2.5rem)] rounded-b-2xl bg-white/50 dark:bg-black/20 backdrop-blur-xl border-x border-b border-gray-300 dark:border-white/20 p-4">
          <div className="grid grid-cols-4 gap-2 mb-3">
            {[
              { icon: DollarSign, label: 'Revenue', value: '$847K', change: '+23%', color: 'purple' },
              { icon: Users, label: 'Users', value: '12.4K', change: '+18%', color: 'orange' },
              { icon: Package, label: 'Orders', value: '1,847', change: '+31%', color: 'pink' },
              { icon: TrendingUp, label: 'Growth', value: '24.8%', change: '+5%', color: 'purple' }
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className={`rounded-lg p-2 border ${
                  stat.color === 'purple' ? 'bg-accent-purple/10 border-accent-purple/30' :
                  stat.color === 'orange' ? 'bg-accent-orange/10 border-accent-orange/30' :
                  'bg-accent-pink/10 border-accent-pink/30'
                }`}>
                  <Icon size={10} className={`mb-1 ${
                    stat.color === 'purple' ? 'text-accent-purple' :
                    stat.color === 'orange' ? 'text-accent-orange' :
                    'text-accent-pink'
                  }`} />
                  <div className="text-[7px] text-gray-600 dark:text-gray-400">{stat.label}</div>
                  <div className="text-[9px] font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-[6px] text-green-500">{stat.change}</div>
                </div>
              );
            })}
          </div>

          <div className="h-24 rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 dark:from-white/10 dark:to-white/5 p-2 mb-3 relative">
            <div className="text-[7px] text-gray-600 dark:text-gray-400 mb-1">Revenue Trend</div>
            <div className="absolute bottom-2 left-2 right-2 h-12 flex items-end justify-around">
              {[45, 52, 48, 65, 58, 75, 70, 82, 78, 88].map((height, i) => (
                <div key={i} className="w-2 bg-gradient-to-t from-accent-purple via-accent-pink to-accent-orange rounded-t" style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            {['Stripe API Connected', 'PostgreSQL Synced', 'Real-time Updates'].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5 p-1.5 rounded bg-green-500/10 border border-green-500/30">
                <CheckCircle2 size={8} className="text-green-500" />
                <span className="text-[7px] text-gray-700 dark:text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  if (type === 'crm') {
    return (
      <>
        <div className="h-10 rounded-t-2xl bg-gradient-to-r from-gray-200/80 to-gray-300/80 dark:from-white/20 dark:to-white/10 border-b border-gray-300 dark:border-white/20 flex items-center px-4 gap-2 backdrop-blur-xl">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400 hover:scale-125 transition-transform cursor-pointer" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 hover:scale-125 transition-transform cursor-pointer" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400 hover:scale-125 transition-transform cursor-pointer" />
          </div>
          <div className="flex-1 h-5 rounded bg-gray-300/50 dark:bg-white/5 ml-4 flex items-center px-2">
            <span className="text-[8px] text-gray-500 dark:text-gray-400">crm.mycompany.com/deals</span>
          </div>
        </div>

        <div className="h-[calc(100%-2.5rem)] rounded-b-2xl bg-white/50 dark:bg-black/20 backdrop-blur-xl border-x border-b border-gray-300 dark:border-white/20 p-4 grid grid-cols-5 gap-2">
          {['Lead', 'Qualified', 'Proposal', 'Negotiation', 'Won'].map((stage, i) => (
            <div key={i} className="space-y-1.5">
              <div className={`text-[7px] font-bold text-center p-1 rounded ${
                i === 0 ? 'bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-gray-300' :
                i === 1 ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' :
                i === 2 ? 'bg-accent-purple/20 text-accent-purple' :
                i === 3 ? 'bg-accent-orange/20 text-accent-orange' :
                'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
              }`}>
                {stage}
              </div>

              {[...Array(i === 2 ? 3 : i === 3 ? 2 : 1)].map((_, idx) => (
                <div key={idx} className="p-2 rounded-lg bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:scale-105 transition-transform cursor-pointer">
                  <div className="flex items-center gap-1 mb-1">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-accent-purple/30 to-accent-pink/30" />
                    <div className="text-[7px] font-bold text-gray-900 dark:text-white truncate">
                      {i === 0 ? 'Acme Corp' : i === 1 ? 'Beta Inc' : i === 2 && idx === 0 ? 'Gamma Ltd' : i === 2 && idx === 1 ? 'Delta Co' : i === 2 ? 'Epsilon' : i === 3 && idx === 0 ? 'Zeta LLC' : i === 3 ? 'Theta' : 'Omega'}
                    </div>
                  </div>
                  <div className="text-[6px] text-accent-purple font-bold mb-0.5">
                    ${i === 0 ? '45K' : i === 1 ? '120K' : i === 2 && idx === 0 ? '250K' : i === 2 && idx === 1 ? '180K' : i === 2 ? '95K' : i === 3 && idx === 0 ? '380K' : i === 3 ? '210K' : '450K'}
                  </div>
                  <div className="flex items-center gap-1">
                    <Mail size={6} className="text-gray-500" />
                    <span className="text-[5px] text-gray-500 dark:text-gray-400">Sent via SendGrid</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="h-10 rounded-t-2xl bg-gradient-to-r from-gray-200/80 to-gray-300/80 dark:from-white/20 dark:to-white/10 border-b border-gray-300 dark:border-white/20 flex items-center px-4 gap-2 backdrop-blur-xl">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400 hover:scale-125 transition-transform cursor-pointer" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 hover:scale-125 transition-transform cursor-pointer" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400 hover:scale-125 transition-transform cursor-pointer" />
        </div>
        <div className="flex-1 h-5 rounded bg-gray-300/50 dark:bg-white/5 ml-4 flex items-center px-2">
          <span className="text-[8px] text-gray-500 dark:text-gray-400">portal.mycompany.com/orders</span>
        </div>
      </div>

      <div className="h-[calc(100%-2.5rem)] rounded-b-2xl bg-white/50 dark:bg-black/20 backdrop-blur-xl border-x border-b border-gray-300 dark:border-white/20 p-4">
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-300 dark:border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-purple via-accent-pink to-accent-orange" />
            <div>
              <div className="text-[8px] font-bold text-gray-900 dark:text-white">John Smith</div>
              <div className="text-[6px] text-gray-500 dark:text-gray-400">john@example.com</div>
            </div>
          </div>
          <div className="text-[6px] text-green-500 font-bold">● Active</div>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-accent-purple/10 to-accent-purple/5 border border-accent-purple/30">
            <div className="flex items-center gap-1 mb-1">
              <Package size={8} className="text-accent-purple" />
              <span className="text-[7px] text-gray-600 dark:text-gray-400">Total Orders</span>
            </div>
            <div className="text-[10px] font-bold text-gray-900 dark:text-white">24</div>
          </div>
          <div className="p-2 rounded-lg bg-gradient-to-br from-accent-orange/10 to-accent-orange/5 border border-accent-orange/30">
            <div className="flex items-center gap-1 mb-1">
              <DollarSign size={8} className="text-accent-orange" />
              <span className="text-[7px] text-gray-600 dark:text-gray-400">Total Spent</span>
            </div>
            <div className="text-[10px] font-bold text-gray-900 dark:text-white">$3,847</div>
          </div>
        </div>

        <div className="space-y-2">
          {[
            { id: '#4821', status: 'Delivered', amount: '$247', date: 'Dec 15' },
            { id: '#4820', status: 'Shipped', amount: '$189', date: 'Dec 12' },
            { id: '#4819', status: 'Processing', amount: '$534', date: 'Dec 10' }
          ].map((order, i) => (
            <div key={i} className="p-2 rounded-lg bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:scale-102 transition-transform">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[8px] font-bold text-gray-900 dark:text-white">Order {order.id}</span>
                <span className={`text-[6px] px-1.5 py-0.5 rounded-full ${
                  order.status === 'Delivered' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300' :
                  order.status === 'Shipped' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' :
                  'bg-accent-orange/20 text-accent-orange'
                }`}>
                  {order.status}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[7px] text-gray-600 dark:text-gray-400">{order.date}</span>
                <span className="text-[8px] font-bold text-accent-purple">{order.amount}</span>
              </div>
              {i === 1 && (
                <div className="mt-1 pt-1 border-t border-gray-200 dark:border-white/10 flex items-center gap-1">
                  <Phone size={6} className="text-accent-orange" />
                  <span className="text-[5px] text-gray-500">SMS sent via Twilio</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
