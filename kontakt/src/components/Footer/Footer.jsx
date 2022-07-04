import React from 'react'
import './footer.scss'

const Footer = () => {
    return (
        <div id='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                        <ul>
                            <li><svg class="cursor-pointer" viewBox="0 0 506 153" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M464.3 92.4899H476.4V89.6599L472.61 89.2999V73.7799C474.57 72.8199 476.81 71.7699 478.68 71.7699C482.47 71.7699 482.79 73.8199 482.79 76.6099V92.4899H491.1V89.6599L487.31 89.2999V73.7799L488.54 73.2299C490.05 72.5499 492.1 71.7699 493.43 71.7699C497.26 71.7699 497.45 73.9199 497.45 76.7899V92.4899H505.76V89.6599L501.97 89.2999V75.0599C501.97 72.5499 501.33 70.6799 500.1 69.5399C499.05 68.5799 497.5 68.1299 495.49 68.1299C492.71 68.1299 489.74 69.2699 486.59 71.0499C485.68 69.3599 483.99 68.1299 481.02 68.1299C478.33 68.1299 475.77 68.8599 472.12 71.0099V68.5499H464.36V71.3299L468.1 71.6999V89.3199L464.31 89.6799V92.4899H464.3ZM441.71 80.4899C441.71 74.6899 443.99 70.8599 448.88 70.8599C453.67 70.8599 456 74.6899 456 80.4899C456 86.2399 453.67 90.0799 448.88 90.0799C443.99 90.0799 441.71 86.2399 441.71 80.4899ZM436.73 80.4899C436.73 88.8899 441.2 92.9999 448.87 92.9999C456.54 92.9999 460.97 88.9399 460.97 80.4899C460.97 72.0499 456.5 67.9399 448.87 67.9399C441.21 67.9399 436.73 72.0399 436.73 80.4899ZM411.67 80.0799C411.67 88.7099 415.78 92.9499 424.54 92.9499C428.15 92.9499 431.07 92.3999 432.12 92.1699V89.1999C430.93 89.4299 427.97 89.9799 425.36 89.9799C418.97 89.9799 416.64 86.6499 416.64 80.1199C416.64 73.5499 420.06 70.8999 425.22 70.8999C427.05 70.8999 428.32 71.1699 428.83 71.3099L429.33 76.5599H432.3V68.8499C430.15 68.4399 428.15 68.0299 424.36 68.0299C416.01 68.0299 411.67 72.2699 411.67 80.0799ZM389.35 78.9799C389.35 74.0999 391.17 70.8099 395.65 70.8099C400.35 70.8099 402.18 74.6399 402.18 78.9799H389.35ZM384.24 80.0799C384.24 88.6199 388.08 92.9999 397.39 92.9999C400.17 92.9999 402.96 92.7299 405.2 92.1799V89.3499C403.56 89.7199 400.95 90.0799 398.58 90.0799C394.43 90.0799 389.77 89.6699 389.27 81.7699H407.21V80.9499C407.21 72.6899 403.7 67.9899 395.62 67.9899C389.17 67.9799 384.24 71.6299 384.24 80.0799ZM368.85 92.4899H380.95V89.6599L377.16 89.2999V57.8499H368.9V60.6799L372.64 61.0399V89.2999L368.85 89.6599V92.4899V92.4899ZM347.72 78.9799C347.72 74.0999 349.55 70.8099 354.02 70.8099C358.72 70.8099 360.55 74.6399 360.55 78.9799H347.72ZM342.6 80.0799C342.6 88.6199 346.43 92.9999 355.75 92.9999C358.53 92.9999 361.32 92.7299 363.56 92.1799V89.3499C361.92 89.7199 359.31 90.0799 356.94 90.0799C352.78 90.0799 348.13 89.6699 347.63 81.7699H365.57V80.9499C365.57 72.6899 362.06 67.9899 353.98 67.9899C347.54 67.9799 342.6 71.6299 342.6 80.0799ZM327.68 86.5599C327.68 91.3099 329.73 92.4899 334.71 92.4899H339V89.3899H335.9C333.34 89.3899 332.29 89.0199 332.29 85.9199V71.6299H339.23V68.5299H332.29V59.9899L327.68 61.2699V68.5299H322.66V71.6299H327.68V86.5599V86.5599ZM300.65 80.2199C300.65 76.4299 301.47 72.5499 306.72 72.5499C308.23 72.5499 309.5 72.7299 309.82 72.8699V87.9799H306.72C301.98 87.9699 300.65 84.7799 300.65 80.2199ZM292.39 80.3499C292.39 88.6999 297.05 92.4899 305.77 92.4899H321.61V88.3799L317.55 88.0199V57.8499H305.82V61.9599L309.84 62.3199V68.4399C309.16 68.2999 307.24 68.1199 305 68.1199C296.73 68.1199 292.39 72.1799 292.39 80.3499ZM273.35 92.4899H289.14V88.3799L285.08 88.0199V57.8499H273.35V61.9599L277.37 62.3199V88.0199L273.35 88.3799V92.4899ZM248.89 92.4899H264.68V88.3799L260.62 88.0199V74.9699C262.03 73.8699 264.5 73.0499 266.33 72.8199L266.79 77.6099H271.49V68.1599C267.29 68.1599 263.5 68.6599 259.67 70.8999V68.5299H248.9V72.6399L252.9 72.9999V88.0199L248.88 88.3799V92.4899H248.89ZM226.34 80.4399C226.34 75.8699 227.12 72.2699 231.77 72.2699C236.47 72.2699 237.25 75.8799 237.25 80.4399C237.25 84.9599 236.47 88.5699 231.77 88.5699C227.11 88.5699 226.34 84.9599 226.34 80.4399ZM218.07 80.4399C218.07 89.7499 223.64 93.0399 231.77 93.0399C239.94 93.0399 245.51 89.7499 245.51 80.4399C245.51 71.1299 239.94 67.8399 231.77 67.8399C223.64 67.8399 218.07 71.1299 218.07 80.4399ZM179.73 92.4899H190.18L193.6 77.5599H194.28L197.57 92.4899H207.89L212.64 72.9999L215.79 72.6299V68.5199H207.94L203.74 86.4099H203.1L198.9 68.5199H190.23L186.17 86.3199H185.53L181.33 68.5199H171.83V72.6299L174.98 72.9999L179.73 92.4899Z" fill="#fafafa"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M118.85 95.21C110 109.34 94.3 118.74 76.41 118.74C58.52 118.74 42.82 109.35 33.98 95.21H37.91C45.61 104.65 63.3 110.68 76.42 110.68C89.54 110.68 107.23 104.66 114.93 95.21H118.85V95.21Z" fill="#fafafa"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M96.1498 84.2599C96.1498 90.3599 98.7099 91.6499 104.88 91.6499H111.78V86.7899H108.43C105.47 86.7899 104.54 85.9999 104.54 82.8699V70.4799H112.33V65.6199H104.54V56.0999L96.1599 57.5399V65.6199H90.8398V70.4799H96.1599V84.2599H96.1498Z" fill="#fafafa"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M48.7297 91.6499H60.0097L63.7097 75.4399H64.4497L67.9997 91.6499H79.1397L84.2697 70.4799L87.6697 70.0899V65.6199H79.1897L74.6597 85.0599H73.9697L69.4297 65.6199H60.0597L55.6797 84.9599H54.9897L50.4497 65.6199H40.1997V70.0899L43.5997 70.4799L48.7297 91.6499Z" fill="#fafafa"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M33.98 56.98C42.82 42.85 58.53 33.46 76.41 33.46C94.3 33.46 110 42.85 118.85 56.98H114.92C107.22 47.55 89.54 41.52 76.41 41.52C63.29 41.52 45.6 47.55 37.9 56.98H33.98Z" fill="#fafafa"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M75.9099 15.7099C109.4 15.7099 136.55 42.8899 136.55 76.4099C136.55 109.93 109.4 137.11 75.9099 137.11C42.4199 137.11 15.2599 109.93 15.2599 76.4099C15.2699 42.8799 42.4199 15.7099 75.9099 15.7099ZM75.9599 0.629883C117.84 0.629883 151.79 34.5699 151.79 76.4399C151.79 118.31 117.84 152.25 75.9599 152.25C34.0799 152.25 0.129883 118.31 0.129883 76.4399C0.139883 34.5799 34.0899 0.629883 75.9599 0.629883Z" fill="#fafafa"></path></svg></li>
                            <li className='icons'><i class="fa-solid fa-phone"></i> <span>*2555</span></li>
                            <li className='icons'><i class="fa-solid fa-envelope"></i> <span>info@w-t.az</span> </li>
                            <li className='icons'><i class="fa-solid fa-house-user"></i><span>Mağazalar</span> </li>
                            <li className='icons'><i class="fa-solid fa-briefcase"></i><span>Korporativ satışlar</span> </li>
                            <li className='icons'><i class="fa-solid fa-circle-info"></i><span>Haqqımızda</span> </li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <ul>
                            <li><span>Telefonlar və planşetlər</span> </li>
                            <li><span>Mobil telefonlar</span> </li>
                            <li><span>Planşetlər</span> </li>
                            <li><span>Ev telefonları</span> </li>
                        </ul>
                    </div><div className="col-lg-2">
                        <ul>
                            <li><span>Qadjet və aksesuarlar</span> </li>
                            <li><span>Powerbanklar</span> </li>
                            <li><span>Digər</span> </li>
                            <li><span>Smart saatlar</span> </li>
                            <li><span>Adapterlər</span> </li>
                            <li><span>Elektron kitablar</span> </li>
                            <li><span>Kamera</span> </li>
                            <li><span>Kabellər</span> </li>
                            <li><span>Saatlar</span> </li>
                            <li><span>Portativ soyuducular</span> </li>
                            <li><span>Avtomobil üçün adapterlər</span> </li>
                            <li><span>Avtomobil üçün tutacaqlar</span> </li>
                            <li><span>Veb-kameralar</span> </li>
                            <li><span>Proyektorlar</span> </li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <ul>

                            <li><span>TV, Audio və Əyləncə</span> </li>
                            <li><span>Simsiz qulaqlıqlar</span> </li>
                            <li><span>TV</span> </li>
                            <li><span>Oyun konsolları</span> </li>
                            <li><span>Nəqliyyat</span> </li>
                            <li><span>Oyunlar</span> </li>
                            <li><span>Səsucaldıcılar</span> </li>
                            <li><span>Portativ akustika</span> </li>
                            <li><span>Simli qulaqlıqlar</span> </li>
                            <li><span>Oyun Zonası</span> </li>
                        </ul>
                    </div><div className="col-lg-2">
                        <ul>
                            <li><span>Kompüter texnikası</span> </li>
                            <li><span>Notbuklar</span> </li>
                            <li><span>Monobloklar</span> </li>
                            <li><span>Modem və router</span> </li>
                            <li><span>Printertlər</span> </li>
                            <li><span>Monitorlar</span> </li>
                        </ul>
                    </div><div className="col-lg-2">
                        <ul>
                            <li><span>Məişət texnikası</span> </li>
                            <li><span>Robot tozsoranlar</span> </li>
                            <li><span>Aspiratorlar</span> </li>
                            <li><span>Tozsoranlar</span> </li>
                            <li><span>Paltaryuyan maşınlar</span> </li>
                            <li><span>Qabyuyan maşınlar</span> </li>
                            <li><span>Soyuducular</span> </li>
                            <li><span>Mikrodalğalı soba</span> </li>
                            <li><span>Sobalar</span> </li>
                            <li><span>Bişirmə paneli</span> </li>
                            <li><span>Fenlər</span> </li>
                        </ul>
                    </div>


                </div>
                <hr />
                <div className="row">
                    <div className="bottom">
                        <div className="col-lg-11">
                            <h6>Bütün hüquqlar qorunur © World Telecom 1998-2022</h6>
                        </div>
                        <div className="col-lg-1">
                            <div className="bottom-icons">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-youtube"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer