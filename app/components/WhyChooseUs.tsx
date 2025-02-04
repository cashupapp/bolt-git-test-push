export function WhyChooseUs() {
  const features = [
    {
      name: 'Premium Selection',
      description: 'Hand-picked premium vehicles from trusted sellers.',
      icon: '🚗',
    },
    {
      name: 'Expert Inspection',
      description: 'Every vehicle undergoes a rigorous 150-point inspection.',
      icon: '🔍',
    },
    {
      name: 'Easy Financing',
      description: 'Flexible financing options to suit your needs.',
      icon: '💳',
    },
    {
      name: 'Money-Back Guarantee',
      description: '7-day money-back guarantee for peace of mind.',
      icon: '✨',
    },
  ]

  return (
    <div className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We provide the best car buying experience with premium services and guarantees.
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-white px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md p-3 text-4xl shadow-lg">
                        {feature.icon}
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-semibold text-gray-900">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
