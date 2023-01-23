'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdminModule.html" data-type="entity-link" >AdminModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AdminModule-2e3f7d57ef521d5b719f41d6acefcb95ec8fb4e68b6d0475f372b7b30da80bfd004441826a0dbc6384e16738865592eb32127ae044b1d5851eda0148449445b0"' : 'data-target="#xs-components-links-module-AdminModule-2e3f7d57ef521d5b719f41d6acefcb95ec8fb4e68b6d0475f372b7b30da80bfd004441826a0dbc6384e16738865592eb32127ae044b1d5851eda0148449445b0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdminModule-2e3f7d57ef521d5b719f41d6acefcb95ec8fb4e68b6d0475f372b7b30da80bfd004441826a0dbc6384e16738865592eb32127ae044b1d5851eda0148449445b0"' :
                                            'id="xs-components-links-module-AdminModule-2e3f7d57ef521d5b719f41d6acefcb95ec8fb4e68b6d0475f372b7b30da80bfd004441826a0dbc6384e16738865592eb32127ae044b1d5851eda0148449445b0"' }>
                                            <li class="link">
                                                <a href="components/AlayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EtatComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EtatComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LougoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LougoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidemenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidemenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdminRoutingModule.html" data-type="entity-link" >AdminRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-047fedb4361e8fa7d27d7554016b34f7d2ff90a87c0f85e5d86aa83e1a9ac6b035a1847b71df61bb5b8e2f18daf8b14960b2f3cac337fdcc5dd0abc8ca84f640"' : 'data-target="#xs-components-links-module-AppModule-047fedb4361e8fa7d27d7554016b34f7d2ff90a87c0f85e5d86aa83e1a9ac6b035a1847b71df61bb5b8e2f18daf8b14960b2f3cac337fdcc5dd0abc8ca84f640"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-047fedb4361e8fa7d27d7554016b34f7d2ff90a87c0f85e5d86aa83e1a9ac6b035a1847b71df61bb5b8e2f18daf8b14960b2f3cac337fdcc5dd0abc8ca84f640"' :
                                            'id="xs-components-links-module-AppModule-047fedb4361e8fa7d27d7554016b34f7d2ff90a87c0f85e5d86aa83e1a9ac6b035a1847b71df61bb5b8e2f18daf8b14960b2f3cac337fdcc5dd0abc8ca84f640"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-277f163e0f49930866bd4d2a4dbccb7ae674e0b8d786abf491bf0ec495a0e6227b3542649bcec4f5d466f44646b4cf53c5d13800a3392b10696e7a1a9dc36f1b"' : 'data-target="#xs-components-links-module-AuthModule-277f163e0f49930866bd4d2a4dbccb7ae674e0b8d786abf491bf0ec495a0e6227b3542649bcec4f5d466f44646b4cf53c5d13800a3392b10696e7a1a9dc36f1b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-277f163e0f49930866bd4d2a4dbccb7ae674e0b8d786abf491bf0ec495a0e6227b3542649bcec4f5d466f44646b4cf53c5d13800a3392b10696e7a1a9dc36f1b"' :
                                            'id="xs-components-links-module-AuthModule-277f163e0f49930866bd4d2a4dbccb7ae674e0b8d786abf491bf0ec495a0e6227b3542649bcec4f5d466f44646b4cf53c5d13800a3392b10696e7a1a9dc36f1b"' }>
                                            <li class="link">
                                                <a href="components/AulayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AulayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FactureModule.html" data-type="entity-link" >FactureModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FactureModule-6d501e5ceff7fdd543f23cf9ae99dabeac6677d03e2c362227931ec91633f7eb4d85b1f0485a91dcbdccfb1b2d68ee4089936bb53d806c4163e6ea6c336b4cfe"' : 'data-target="#xs-components-links-module-FactureModule-6d501e5ceff7fdd543f23cf9ae99dabeac6677d03e2c362227931ec91633f7eb4d85b1f0485a91dcbdccfb1b2d68ee4089936bb53d806c4163e6ea6c336b4cfe"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FactureModule-6d501e5ceff7fdd543f23cf9ae99dabeac6677d03e2c362227931ec91633f7eb4d85b1f0485a91dcbdccfb1b2d68ee4089936bb53d806c4163e6ea6c336b4cfe"' :
                                            'id="xs-components-links-module-FactureModule-6d501e5ceff7fdd543f23cf9ae99dabeac6677d03e2c362227931ec91633f7eb4d85b1f0485a91dcbdccfb1b2d68ee4089936bb53d806c4163e6ea6c336b4cfe"' }>
                                            <li class="link">
                                                <a href="components/PaiementComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaiementComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FactureRoutingModule.html" data-type="entity-link" >FactureRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PublicModule.html" data-type="entity-link" >PublicModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PublicModule-a588e435b1521fc7e27c2a6077a01dd9d598155051e279cb956a3edef455fdc28b3fdfc4ba36030a9cf239879bbdba3ef24d12f9482309aba23a0727aae0c2a4"' : 'data-target="#xs-components-links-module-PublicModule-a588e435b1521fc7e27c2a6077a01dd9d598155051e279cb956a3edef455fdc28b3fdfc4ba36030a9cf239879bbdba3ef24d12f9482309aba23a0727aae0c2a4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublicModule-a588e435b1521fc7e27c2a6077a01dd9d598155051e279cb956a3edef455fdc28b3fdfc4ba36030a9cf239879bbdba3ef24d12f9482309aba23a0727aae0c2a4"' :
                                            'id="xs-components-links-module-PublicModule-a588e435b1521fc7e27c2a6077a01dd9d598155051e279cb956a3edef455fdc28b3fdfc4ba36030a9cf239879bbdba3ef24d12f9482309aba23a0727aae0c2a4"' }>
                                            <li class="link">
                                                <a href="components/AboutUsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutUsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContactComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContactComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EquipeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EquipeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PfooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PfooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PheaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PheaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrivacyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrivacyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReservationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReservationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServiceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServiceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TermeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TermeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublicRoutingModule.html" data-type="entity-link" >PublicRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/VoitureModule.html" data-type="entity-link" >VoitureModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-VoitureModule-4bdb1bad8564d95146d40a8ec0d0f5d02b41d9e6b294b1f04477fedf96c1cc8956b576b5d0248aef3cc2aaee4049123c4ef450cfedf731aed0ba0c7860da8aa7"' : 'data-target="#xs-components-links-module-VoitureModule-4bdb1bad8564d95146d40a8ec0d0f5d02b41d9e6b294b1f04477fedf96c1cc8956b576b5d0248aef3cc2aaee4049123c4ef450cfedf731aed0ba0c7860da8aa7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VoitureModule-4bdb1bad8564d95146d40a8ec0d0f5d02b41d9e6b294b1f04477fedf96c1cc8956b576b5d0248aef3cc2aaee4049123c4ef450cfedf731aed0ba0c7860da8aa7"' :
                                            'id="xs-components-links-module-VoitureModule-4bdb1bad8564d95146d40a8ec0d0f5d02b41d9e6b294b1f04477fedf96c1cc8956b576b5d0248aef3cc2aaee4049123c4ef450cfedf731aed0ba0c7860da8aa7"' }>
                                            <li class="link">
                                                <a href="components/AddcarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddcarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeletecarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeletecarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdatecarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdatecarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VoitureRoutingModule.html" data-type="entity-link" >VoitureRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});