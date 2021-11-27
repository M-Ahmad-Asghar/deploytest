import React from 'react'

function useClientsAndPartners() {
    const imagesSrc = [
        { src: '/images/clients-and-partners/kick-fin.png' },
        { src: '/images/clients-and-partners/google.png' },
        { src: '/images/clients-and-partners/beyond-gaming.png' },
        { src: '/images/clients-and-partners/csu.png' },
        { src: '/images/clients-and-partners/golden-globe.png' },
        { src: '/images/clients-and-partners/j-crew.png' },
        { src: '/images/clients-and-partners/sports-me.png' },
        { src: '/images/clients-and-partners/vangaurd.png' },
        { src: '/images/clients-and-partners/west-elm.png' },

    ]
    return { imagesSrc: imagesSrc || [] }
}

export default useClientsAndPartners
