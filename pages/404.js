import React from 'react'

export default function NotFoundPage() {
    return (
        <div>
            <h2>Üzgünüz, bu sayfaya ulaşılamıyor.</h2>
            <p>Tıkladığın bağlantı bozuk olabilir veya sayfa kaldırılmış olabilir. Instagram'a geri dön.</p>

            <style jsx>{`
            div {
                text-align: center;
                padding: 20vh 15px 0 15px;
            }
            p {
                margin-top: 1%;
            }
            `}</style>
        </div>
    )
}
