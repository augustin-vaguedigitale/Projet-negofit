import "../../../../public/assets/css/bootstrap.min.css"
import "../../../../public/assets/css/style.css"
import "../../../../public/assets/css/animate.css"

import "../../../../public/assets/css/fontAwesomePro.css"
import "../../../../public/assets/css/slick.css"
import "../../../../public/assets/css/responsive.css"
import "../../../../public/assets/css/nice-select.css"
import "../../../../public/assets/css/magnific-popup.css"
import "../../../../public/assets/css/owl.carousel.css"
import "../../../../public/assets/css/line-awesome.min.css"

export default function Privacy(){
    return(
        <div className="">
            <div id="faq-page" className="faq-section section-padding">
  <div className="container">
    <div className="row">
      <div className="col-xl-6 col-lg-6 col-12 wow fadeInUp animated" data-wow-delay="200ms">
        <div className="section-title">
          <p>Négofit Sarl</p>
          <h2>Politique de Confidentialité de Negofit
          </h2>
        </div>
        <div className="accordion faqs" id="accordionFaq">
          <div className="card">
            <div className="card-header" id="heading1">
              <h5 className="mb-0 subtitle">
                <button className="btn btn-link collapsed active" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                  Dernière mise à jour : 16 août 2024
                </button>
              </h5>
            </div>

            <div id="collapse1" className="collapse show" aria-labelledby="heading1" data-parent="#accordionFaq">
              <div className="card-body">
                <div className="content">
                  <p className="description">
                    Chez Negofit, nous attachons une grande importance à la protection de vos données personnelles.
                    Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations lorsque vous utilisez notre site.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="heading2">
              <h5 className="mb-0 subtitle">
                <button className="btn btn-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                  Informations d'identification personnelle
                </button>
              </h5>
            </div>

            <div id="collapse2" className="collapse" aria-labelledby="heading2" data-parent="#accordionFaq">
              <div className="card-body">
                <div className="content">
                  <p className="description">
                    Lorsque vous créez un compte sur Negofit, nous collectons des informations telles que votre nom,
                    adresse e-mail, numéro de téléphone, adresse postale, et toute autre information que vous choisissez de fournir. <br />
                    <b>Informations d'utilisation :</b> Nous recueillons automatiquement certaines informations lorsque vous visitez notre site, comme votre adresse IP, le type de navigateur que vous utilisez,
                    les pages que vous consultez, et le temps passé sur notre site. <br />
                    <b>Cookies et technologies similaires : </b>Nous utilisons des cookies pour améliorer votre expérience sur notre site.
                    Les cookies nous permettent de reconnaître votre navigateur et de capturer certaines informations.
                    Vous pouvez choisir de désactiver les cookies via les paramètres de votre navigateur, mais cela pourrait affecter certaines fonctionnalités du site.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="heading3">
              <h5 className="mb-0 subtitle">
                <button className="btn btn-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                  Conditions Générales d'Utilisation
                </button>
              </h5>
            </div>

            <div id="collapse3" className="collapse" aria-labelledby="heading3" data-parent="#accordionFaq">
              <div className="card-body">
                <div className="content">
                  <p className="description">
                    Nous nous réservons le droit de modifier ces CGU à tout moment, en fonction des évolutions de la loi, des règlements ou des exigences légales.
                    Nous nous réservons également le droit de suspendre, de résilier ou de limiter l'accès à notre site pour des raisons de maintenance ou pour tout autre motif jugé nécessaire.
                    Le contenu du site (textes, graphiques, logos, etc.) est la propriété de Negofit ou de ses concédants de licence et est protégé par les lois sur la propriété intellectuelle.
                    Vous ne pouvez pas utiliser, reproduire ou distribuer ce contenu sans autorisation écrite préalable.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="col-lg-6 wow fadeInRight" data-wow-delay=".3s">
        <div className="faq-bg">
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}