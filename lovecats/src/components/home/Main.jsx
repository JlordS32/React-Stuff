import React from 'react';
import Hero from './Hero';
import '../../styles/main.modules.css';

const Main = () => {
    return (
        <main>
            <Hero />
            <div className='main-content'>
                <h1>More about us!</h1>
                <div className='content-details'>
                    <div className='content-details-p'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo dolorem iure qui voluptas sit nulla, corrupti, beatae similique omnis doloribus voluptatibus esse nobis? Reiciendis laudantium, officiis nisi, eos iste odit assumenda deserunt suscipit, beatae ducimus voluptate. Dignissimos consectetur maiores dolore, molestias, sapiente labore quasi inventore cupiditate ducimus maxime beatae repudiandae vero. Esse minus accusantium suscipit recusandae, quod dolore sint? Beatae, libero distinctio tempore officia enim quas rem. Laborum veritatis, vero ipsum deserunt minus in itaque distinctio voluptatem adipisci officia quae, maxime nam nisi ducimus beatae accusamus nihil asperiores omnis est mollitia? Molestias, ab facere. Hic eius obcaecati ipsum rerum aut.</p>
                    </div>

                    <div className='content-details-p'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo dolorem iure qui voluptas sit nulla, corrupti, beatae similique omnis doloribus voluptatibus esse nobis? Reiciendis laudantium, officiis nisi, eos iste odit assumenda deserunt suscipit, beatae ducimus voluptate. Dignissimos consectetur maiores dolore, molestias, sapiente labore quasi inventore cupiditate ducimus maxime beatae repudiandae vero. Esse minus accusantium suscipit recusandae, quod dolore sint? Beatae, libero distinctio tempore officia enim quas rem. Laborum veritatis, vero ipsum deserunt minus in itaque distinctio voluptatem adipisci officia quae, maxime nam nisi ducimus beatae accusamus nihil asperiores omnis est mollitia? Molestias, ab facere. Hic eius obcaecati ipsum rerum aut.</p>
                    </div>
                </div>
                <div className='contents'>
                    "Ipsum dolor, sit amet consectetur adipisicing elit. Quia corporis eaque, similique accusantium est voluptatibus nam reiciendis magnam, optio nesciunt quaerat iusto!"
                </div>
            </div>
        </main>
    );
};

export default Main;