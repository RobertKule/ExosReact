import React from 'react'

function About() {
    return (
        <div className="px-6 py-10 bg-white min-h-screen">
            <h1 className="text-4xl font-bold text-center text-green-600 mb-8">
                À propos
            </h1>

            <p className="text-gray-700 leading-relaxed mb-8">
                Nous sommes une équipe passionnée par la technologie et l’éducation.
                Notre objectif est de créer des applications performantes et de partager nos connaissances
                avec la communauté.
            </p>

            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Notre Histoire</h2>
                <p className="text-gray-600 leading-relaxed">
                    Fondée en 2020, notre initiative a commencé par des projets open-source
                    et s’est développée vers des solutions professionnelles pour les entreprises.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nos Valeurs</h2>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>Innovation continue</li>
                    <li>Collaboration et entraide</li>
                    <li>Impact social positif</li>
                </ul>
            </section>
        </div>
    )
}

export default About
