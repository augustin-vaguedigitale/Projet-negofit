import "../../../../public/assets/css/bootstrap.min.css" 
import "../../../../public/assets/css/style.css"
export default function Products() {
    return (
         <div className="project-area mt-20" id="produits">

        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                <div className="section-title text-center">
                    <h2>Nos Produits</h2>
                    <p className="description">Découvrez notre gamme complète de produits industriels et techniques, soigneusement sélectionnés pour répondre à vos besoins professionnels. Chez Negofit SARL, nous nous engageons à fournir des équipements de qualité supérieure, allant des matériels de laboratoire aux solutions de tuyauterie, en passant par les équipements de cantine et les machines industrielles. Explorez notre catalogue et trouvez les solutions idéales pour optimiser vos opérations.</p>
                </div>
                </div>
            </div>
            <div className="row grid">
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="single-project">
                    <div className="project-img">
                    <img src="/assets/img/project/project1.jpg" alt="Project Image" />
                    </div>
                    <div className="project-content">
                    <h3><a href="#">Équipements de Laboratoire</a></h3>
                    <p className="description">Fourniture d'instruments et matériels de laboratoire pour diverses applications scientifiques et industrielles.</p>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="single-project">
                    <div className="project-img">
                    <img src="/assets/img/project/project2.jpg" alt="Project Image" />
                    </div>
                    <div className="project-content">
                    <h3><a href="#">Matériels de Cantine</a></h3>
                    <p className="description">Solutions complètes pour la restauration collective, incluant équipements de cuisine et mobilier.</p>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="single-project">
                    <div className="project-img">
                    <img src="/assets/img/project/project3.jpg" alt="Project Image" />
                    </div>
                    <div className="project-content">
                    <h3><a href="#">Tuyauterie Industrielle</a></h3>
                    <p className="description">Fourniture de systèmes de tuyauterie robustes et fiables pour diverses industries.</p>
                    </div>  
</div>
</div>
</div>
        </div>
    </div>
    )
}