import React, {Component} from 'react'

class Footer extends Component {
    render() {
        return (
            <footer class="p-0 mb-16 footer-none md:mb-0 bg-basic-background-100 ant-layout-footer">
                <div class="mt-4 ant-row" style="margin-left:-2px;margin-right:-2px;margin-top:-2px;margin-bottom:-2px;">
                    <div class="ant-col ant-col-xs-24 ant-col-md-12 ant-col-xl-8"
                        style="padding-left:2px;padding-right:2px;padding-top:2px;padding-bottom:2px;">
                        <div class="flex flex-col items-center justify-center h-24 border border-primary"><button
                                class="flex items-center justify-around w-56 p-2 rounded-full btn-filled-primary"><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-8 h-8 fill-current text-basic-100 icon sprite-icons">
                                    <use href="/_nuxt/df605e5a12536d7053f3f9f19091bf29.svg#i-mobile"></use>
                                </svg> <span>MOBILE APPLICATION</span></button>
                            <ul class="flex flex-row flex-wrap items-center justify-around w-full mt-2 mb-0">
                                <li><a href="/" class="link-primary nuxt-link-active">ABOUT US</a></li>
                                <li><a href="/" class="link-primary nuxt-link-active">T&amp;C</a></li>
                                <li><a href="/" class="link-primary nuxt-link-active"> HELP</a></li>
                                <li><a href="/" class="link-primary nuxt-link-active">HOW TO PLAY</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="ant-col ant-col-xs-24 ant-col-md-12 ant-col-xl-8"
                        style="padding-left:2px;padding-right:2px;padding-top:2px;padding-bottom:2px;">
                        <div class="flex items-center justify-around h-24 border border-primary"><a
                                href="https://facebook.com/betahub" class="w-10 h-10 p-2 rounded-full btn-outline-primary"><svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-full h-full fill-current text-basic-text icon sprite-icons">
                                    <use href="/_nuxt/df605e5a12536d7053f3f9f19091bf29.svg#i-facebook"></use>
                                </svg></a> <a href="https://twitter.com/betahub"
                                class="w-10 h-10 p-2 rounded-full btn-outline-primary"><svg xmlns="http://www.w3.org/2000/svg"
                                    class="w-full h-full fill-current text-basic-text icon sprite-icons">
                                    <use href="/_nuxt/df605e5a12536d7053f3f9f19091bf29.svg#i-twitter"></use>
                                </svg></a> <a href="https://instagram.com/betahub"
                                class="w-10 h-10 p-2 rounded-full btn-outline-primary"><svg xmlns="http://www.w3.org/2000/svg"
                                    class="w-full h-full fill-current text-basic-text icon sprite-icons">
                                    <use href="/_nuxt/df605e5a12536d7053f3f9f19091bf29.svg#i-instagram"></use>
                                </svg></a></div>
                    </div>
                    <div class="ant-col ant-col-xs-24 ant-col-md-12 ant-col-xl-8"
                        style="padding-left:2px;padding-right:2px;padding-top:2px;padding-bottom:2px;">
                        <div class="h-24 border bg-basic-400 border-primary payment-methods"></div>
                    </div>
                    <div class="ant-col ant-col-xs-24 ant-col-md-12 ant-col-xl-8"
                        style="padding-left:2px;padding-right:2px;padding-top:2px;padding-bottom:2px;">
                        <div class="flex items-center justify-around h-24 text-center border border-primary"><span
                                class="paragraph-3 text-basic-text">© 2020 SimpleWave.</span> <span
                                class="paragraph-3 text-basic-text">All Rights Reserved.</span></div>
                    </div>
                    <div class="ant-col ant-col-xs-24 ant-col-md-12 ant-col-xl-8"
                        style="padding-left:2px;padding-right:2px;padding-top:2px;padding-bottom:2px;">
                        <div class="flex items-center justify-center h-24 mb-1 border border-primary">
                            <div class="flex flex-row items-center"><svg xmlns="http://www.w3.org/2000/svg"
                                    class="w-12 h-12 fill-current text-basic-text icon sprite-icons">
                                    <use href="/_nuxt/df605e5a12536d7053f3f9f19091bf29.svg#i-eighteen"></use>
                                </svg> <span class="flex items-center ml-2 leading-4 paragraph-3 text-basic-text">Responsible
                                    Gaming</span></div>
                        </div>
                    </div>
                </div>
                <div
                    class="fixed bottom-0 left-0 flex items-center justify-between w-full h-12 px-4 py-2 lg:left-auto layout-footer">
                    <a class="link-primary"><svg xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6 m-auto fill-current icon sprite-icons">
                            <use href="/_nuxt/df605e5a12536d7053f3f9f19091bf29.svg#i-menu"></use>
                        </svg>
                        <div class="mt-1 subtitle-4">MENU</div>
                    </a> <a href="/" class="link-primary nuxt-link-active"><svg xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6 m-auto fill-current icon sprite-icons">
                            <use href="/_nuxt/df605e5a12536d7053f3f9f19091bf29.svg#i-statistics"></use>
                        </svg>
                        <div class="mt-1 subtitle-4">stat</div>
                    </a> <a disabled="disabled" class="relative flex flex-col items-center justify-center w-24 h-12 m"><svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-full h-full fill-current text-primary-transparent-600 icon sprite-icons">
                            <use href="/_nuxt/df605e5a12536d7053f3f9f19091bf29.svg#i-list"></use>
                        </svg> <svg xmlns="http://www.w3.org/2000/svg"
                            class="w-8 h-6 fill-current cart text-basic-100 icon sprite-icons">
                            <use href="/_nuxt/df605e5a12536d7053f3f9f19091bf29.svg#i-cart"></use>
                        </svg> <span class="counter">0</span> <span class="odds">0.00</span></a> <a class="link-primary"><svg
                            xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 m-auto fill-current icon sprite-icons">
                            <use href="/_nuxt/df605e5a12536d7053f3f9f19091bf29.svg#i-betslip"></use>
                        </svg>
                        <div class="mt-1 subtitle-4">MY BETS</div>
                    </a> <a class="link-primary"><svg xmlns="http://www.w3.org/2000/svg"
                            class="w-6 h-6 m-auto fill-current icon sprite-icons">
                            <use href="/_nuxt/df605e5a12536d7053f3f9f19091bf29.svg#i-book-a-bet"></use>
                        </svg>
                        <div class="mt-1 subtitle-4">CHECK</div>
                    </a></div>
            </footer>
        )
    }
}

export default Footer;