import React from 'react'

const Footer = ({ text }) => {
    return (
        <div>
            <footer className="bg-dark mt-5 py-5">
                <div className="container-xl">
                    <p className="text-white text-center fs-4 mt-4 m-md-0">
                        {text}
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
