import React from 'react'

function Contact() {
    return (
        <div className="px-6 py-10 bg-gray-50 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
                Contact
            </h1>

            <p className="text-gray-700 leading-relaxed mb-8 text-center">
                Vous souhaitez collaborer avec nous ou en savoir plus sur nos projets ?
                N’hésitez pas à nous écrire !
            </p>

            <section className="mb-10 justify-center w-full flex flex-col items-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Coordonnées</h2>
                <p className="text-gray-600">📧 Email : contact@monsite.com</p>
                <p className="text-gray-600">📞 Téléphone : +243 000 000 000</p>
            </section>

            <section className='w-full flex flex-col justify-center items-center'>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Formulaire de Contact</h2>
                <form className="space-y-4 w-96 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
                    <div>
                        <label className="block text-gray-700 mb-2">Nom :</label>
                        <input type="text" placeholder="Votre nom"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Email :</label>
                        <input type="email" placeholder="Votre email"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-2">Message :</label>
                        <textarea placeholder="Votre message"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>

                    <button type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition">
                        Envoyer
                    </button>
                </form>
            </section>
        </div>
    )
}

export default Contact
