'use client'

import { useSession } from 'next-auth/react'
import { Package, DollarSign, ShoppingCart, Users } from 'lucide-react'

const stats = [
  {
    name: 'Total Products',
    value: '48',
    icon: Package,
    change: '+4.75%',
    changeType: 'positive',
  },
  {
    name: 'Revenue',
    value: '$45,231',
    icon: DollarSign,
    change: '+10.18%',
    changeType: 'positive',
  },
  {
    name: 'Orders',
    value: '156',
    icon: ShoppingCart,
    change: '+2.02%',
    changeType: 'positive',
  },
  {
    name: 'Customers',
    value: '2,848',
    icon: Users,
    change: '+3.45%',
    changeType: 'positive',
  },
]

export default function DashboardPage() {
  const { data: session } = useSession()

  return (
    <div className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">
          Welcome back, {session?.user?.name}
        </h1>
        <div className="mt-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div
                  key={stat.name}
                  className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
                >
                  <dt>
                    <div className="absolute rounded-md bg-gray-400/10 p-3">
                      <Icon className="h-6 w-6 text-gray-600" aria-hidden="true" />
                    </div>
                    <p className="ml-16 truncate text-sm font-medium text-gray-500">
                      {stat.name}
                    </p>
                  </dt>
                  <dd className="ml-16 flex items-baseline pb-6">
                    <p className="text-2xl font-semibold text-gray-900">
                      {stat.value}
                    </p>
                    <p
                      className={`ml-2 flex items-baseline text-sm font-semibold ${
                        stat.changeType === 'positive'
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}
                    >
                      {stat.change}
                    </p>
                  </dd>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
          <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow">
            <div className="p-6">
              <p className="text-sm text-gray-500">No recent activity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 