import React from 'react'

function Home() {
    return (
        <div className="px-6 py-10 bg-gray-50 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
                Bienvenue sur notre site
            </h1>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                    Ce site est conçu pour présenter nos projets, nos valeurs et faciliter la prise de contact.
                    Nous croyons en l’innovation, la collaboration et la transparence.
                </p>
            </section>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nos Services</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Développement web moderne avec React et Next.js</li>
                    <li>Intégration backend avec FastAPI et Django REST</li>
                    <li>Conception UI/UX intuitive avec TailwindCSS et Figma</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Notre Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                    Offrir des solutions technologiques accessibles et durables, tout en accompagnant
                    les entreprises et les individus dans leur transformation digitale.
                </p>
            </section>
        </div>
    )
}

export default Home
