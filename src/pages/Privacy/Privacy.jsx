import React from 'react';
import './Privacy.css';

import "../css/vendors/tippy.css"
import "../css/vendors/litepicker.css"
import "../css/vendors/tiny-slider.css"
import "../css/themes/rubick/side-nav.css"
import "../css/vendors/leaflet.css"
import "../css/vendors/simplebar.css"
import "../css/components/mobile-menu.css"
import Mobilemenu from '../Dashboard/Mobilemenu'
import Simplemenu from '../Dashboard/Simplemenu'
import { BellRing, Search } from 'lucide-react';
import profile4 from "../image/fakers/profile-4.jpg"

export default function Privacy() {
    return (
        <div>




            <Mobilemenu />
            <div className="flex sm:m-8 m-2">
                <Simplemenu style={{ color: "#fff" }} />
                <section className={`privacy-section das`} style={{ overflow: 'scroll', height: "100vh", width: "100vw", backgroundColor: "white", borderRadius: "15px", padding: "2rem 0" }}
                >
                    <div className="privacy-container">
                        <div className="privacy-content">

                            {/* <!-- BEGIN: Top Bar --> */}
                            <div className="relative z-[51] flex h-[40px] items-center border-b border-slate-200" style={{ marginTop: "-20px", padding: "22px 10px", zIndex: "0" }}>

                                {/* <!-- BEGIN: Breadcrumb --> */}
                                <div aria-label="breadcrumb" className=" -intro-x mr-auto hidden sm:flex">
                                    <ol className="flex items-center text-theme-1 dark:text-slate-300" >
                                        <li className="">
                                            <a href="/">Application</a>
                                        </li>
                                        <li className="relative ml-5 pl-0.5 before:content-[''] before:w-[14px] before:h-[14px] before:bg-chevron-black before:transform before:rotate-[-90deg] before:bg-[length:100%] before:-ml-[1.125rem] before:absolute before:my-auto before:inset-y-0 dark:before:bg-chevron-white text-slate-800 cursor-text dark:text-slate-400">
                                            <a href="/">Privacy Policies</a>
                                        </li>
                                    </ol>
                                </div>
                                {/* <!-- END: Breadcrumb --> */}


                                {/* <!-- BEGIN: Search --> */}
                                <div className="search intro-x relative mr-3 sm:mr-6" style={{ backgroundColor: "#f1f5f9" }}>
                                    <div className="relative hidden sm:block" >
                                        <input data-tw-merge="" type="text" placeholder="Search..." className="disabled:bg-slate-100 disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent [&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent ease-in-out text-sm placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-opacity-40 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80 group-[.form-inline]:flex-1 group-[.input-group]:rounded-none group-[.input-group]:[&:not(:first-child)]:border-l-transparent group-[.input-group]:first:rounded-l group-[.input-group]:last:rounded-r group-[.input-group]:z-10 w-56 rounded-full border-transparent bg-slate-300/50 pr-8 shadow-none transition-[width] duration-300 focus:w-72 focus:border-transparent dark:bg-darkmode-400/70" />
                                        <i data-tw-merge="" data-lucide="search" className="stroke-1.5 w-5 h-5 absolute inset-y-0 right-0 my-auto mr-3 text-slate-600 dark:text-slate-500"><Search style={{ marginTop: "-3" }} /></i>
                                    </div>
                                </div>

                                {/* <!-- BEGIN: Notifications --> */}
                                <div data-tw-merge="" data-tw-placement="bottom-end" className="dropdown relative intro-x mr-auto sm:mr-6">
                                    <div data-tw-toggle="dropdown" aria-expanded="false" className="cursor-pointer relative block text-slate-600 outline-none before:absolute before:right-0 before:top-[-2px] before:h-[8px] before:w-[8px] before:rounded-full before:bg-danger before:content-['']"><i data-tw-merge="" data-lucide="bell" className="stroke-1.5 w-5 h-5 dark:text-slate-500"><BellRing /></i></div>
                                </div>

                                <div data-tw-merge="" data-tw-placement="bottom-end" className="dropdown relative"><button data-tw-toggle="dropdown" aria-expanded="false" className="cursor-pointer image-fit zoom-in intro-x block h-8 w-8 overflow-hidden rounded-full shadow-lg"><img src={profile4} alt="Midone - Tailwind Admin Dashboard Template" />
                                </button>
                                </div>
                            </div>





                            <div className="privacy-title mt-[3rem]">
                                <h3 className="privacy">Privacy Policy</h3>
                            </div>
                            <div className="date">Effective Date: 15 Sep, 2023</div>
                            <div className="heading">
                                Welcome, and thank you for your interest in Recag Inc. (“Recag”), and our website(s), products, services and applications (the “Services”). This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. If you have any questions about this Privacy Policy, you can <a href="/" className="lined">contact us</a> here.<br />

                                When you clicked “accept” or “agree” in connection with registering your account, we made available to you this Privacy Policy and the information handling practices described in here. This Privacy Policy only covers Recag&apos;s practices regarding personal information, and not information more generally. We may use aggregated, anonymized data that we derived from your personal information before you deleted it, but not in a manner that incorporates any of your personal information or would identify you personally.<br />

                                We’ll ask for your consent before using your information for a purpose that isn’t covered in this Privacy Policy. You may, of course, decline to share certain personal information with Recag, in which case Recag may not be able to provide to you some of the features and functionality found on the Services.
                            </div>
                            <div className="privacy-point-title">Information Recag Collects</div>
                            <div className="point-content">
                                We collect information to provide better Services to all our users. When you’re not signed into a Recag account, we store the information we collect with unique identifiers tied to the browser, application, or device you’re using. When you’re signed in, we collect information that we store with your Recag account.</div>
                            <div className="privacy-point-title italic">Things You Create or Provide to Us</div>
                            <div className="point-content">
                                When you create a Recag account, submit competition entries or otherwise use the Services, you provide us with personal information that includes your name and a password. You may also provide your mailing address and home/mobile phone number, or other personal information.<br />

                                Your provision of this personal data is required for you to enter into the <a href="/" className="lined"> Terms of Use</a>, a contract with us, as well as for you to enter competitions hosted on the Services. These entries are also a contract between you and the competition host, and we need your personal information to host the Services offered under that contract (see the <a href="#" className="lined"> Terms of Use</a> for additional information). If you do not provide the minimum amount of personal data required to register an account, including your name and email address, you cannot use the Services, as this information is necessary for contractual reasons. Certain parts of the Services also require you to provide a mobile phone number, which is needed to protect against fraud and abuse. Please see “European Requirements” below for further information on the bases for our processing your personal information.<br />

                                We also collect the content you create, upload, or receive from others when using our Services. This includes things like messages you write and receive, forum posts, notebooks, datasets, and competition submissions..</div>
                            <div className="privacy-point-title italic">Information We Collect as You Use Our Services</div>
                            <div className="privacy-point-title fade">Your apps, browsers & devices</div>
                            <div className="point-content">
                                We collect information about the apps, browsers, and devices you use to access our Services or open one of our HTML emails by using different types of technology, including “clear gifs” or “web beacons.” This “automatically collected” information may include Internet Protocol address (also known as “IP address”) or other device address or ID, web browser or device type, the web pages or sites that you visit just before or just after the Services, the pages you view on the Services, and the dates and times that you visit the Services.<br />

                                We use various technologies to collect and store information, including cookies, pixel tags, local storage, such as browser web storage or application data caches, databases, and server logs.</div>
                            <div className="privacy-point-title fade">Your activity</div>
                            <div className="point-content">
                                We collect information about your activity in our Services, which may include:<br />
                                <ul type="circle">
                                    <li>Views and interactions with content and ads.</li>
                                    <li>
                                        People with whom you communicate or share content.</li>
                                    <li>
                                        Which datasets you view or download.</li>
                                </ul>
                            </div>
                            <div className="privacy-point-title fade">Cookies and web beacons</div>
                            <div className="point-content">
                                When you use the Services, we send one or more cookies – small text files containing a string of alphanumeric characters – to your computer. For example, we use cookies to ensure proper navigation between pages on the Services. Recag may use both session cookies and persistent cookies. A session cookie disappears after you close your browser. A persistent cookie remains after you close your browser and may be used by your browser on subsequent visits to the Services.<br />

                                Persistent cookies can be removed. Please review your web browser’s “Help” file to learn the proper way to modify your cookie settings. If you delete, or choose not to accept, cookies from the Services, you may not be able to utilize the features of the Services to their fullest potential.<br />

                                We may also implement on the Services third party content, such as advertising or analytic services, that uses “clear gifs,” “web beacons,” or other similar techniques, which allow the third party content provider to read and write cookies to your browser or implement similar tracking mechanisms. This information is collected directly by the third party, and Recag does not participate in that data transmission. Information collected by third parties in this manner is subject to that third party’s own data collection, use, and disclosure policies. We currently implement services provided by Google Analytics and Facebook.</div>
                            <div className="privacy-point-title fade">Linked accounts</div>
                            <div className="point-content">
                                When you link an account you may have on a third party service (such as a third party social networking site or email provider) to your Recag account, Recag collects certain information stored in connection with that account that you have configured that service to make available, including your email address, provider ID, first and last name, and profile picture. By linking your accounts in this manner, you authorize Recag to access and use your account on the third party service in connection with your use of the Services.</div>
                            <div className="privacy-point-title">Why Recag Collects Information</div>
                            <div className="point-content">Recag uses the information we collect for the following purposes:</div>
                            <div className="privacy-point-title italic">Provide Our Services</div>
                            <div className="point-content">
                                We use your information to deliver our Services, like administering competitions you enter or hosting datasets you upload or access. For example, we use the IP address assigned to your device to send you the data you requested, such as loading a dataset. Another example is that we use unique identifiers stored in cookies on your device to help us authenticate you as the person who should have access to your Recag account.</div>
                            <div className="privacy-point-title italic">Maintain & Improve Our Services</div>
                            <div className="point-content">
                                We also use your information to ensure our Services are working as intended, such as tracking outages or troubleshooting issues that you report to us. For example, we continuously monitor our systems to look for problems. And if we find something wrong with a specific feature, reviewing activity information collected before the problem started allows us to fix things more quickly.<br />

                                And we use your information to make improvements to our Services – for example, to understand and analyze the usage trends and preferences of our Recag account members and to improve the way the Services work and look.<br />

                                For example, we use cookies to analyze how people interact with our Services, which can help us build better products. It may help us discover that it’s taking people too long to complete a certain task or that they have trouble finishing steps at all. We can then redesign that feature and improve the product for everyone.

                            </div>
                            <div className="privacy-point-title italic">Develop New Services</div>
                            <div className="point-content">
                                We use the information we collect in existing Services to help us create new features and functionality.</div>
                            <div className="privacy-point-title italic">Provide Personalized Services</div>
                            <div className="point-content">
                                We use the information we collect to customize our Services for you, including remembering your information so that you will not have to log-in again the next time you visit the Services if you haven’t signed out. We also use data to provide customized third party content and information and to track your status in any Competitions or other activities. In addition, we may use the information we collect to provide personalized and relevant content and advertising, for example showing you events near your location based on your IP address.</div>
                            <div className="privacy-point-title italic">Measure Performance</div>
                            <div className="point-content">
                                We use data for analytics and measurement to understand how our Services are used. For example, we analyze data about your visits to our sites to do things like optimize product design, monitor and analyze the operation and effectiveness of the Services and related activities, and monitor aggregate site usage metrics such as total number of visitors and pages viewed. We use a variety of tools to do this, including Google Analytics. Google Analytics relies on first-party cookies, which means the cookies are set by Recag. You can opt-out from Google Analytics by clicking <a href="#" className="lined"> here</a>.</div>
                            <div className="privacy-point-title italic">Communicate with You</div>
                            <div className="point-content">
                                We use information we collect, like your email address, to interact with you directly. For example, we may send you a notification if we detect suspicious activity on your account, or we may let you know about upcoming changes or improvements to our Services. We will also use your email address to contact you with respect to competition entries, prize awards and otherwise in connection with competitions; for administrative and customer service purposes; to address intellectual property infringement, rights of privacy, or defamation issues; or regarding things you post on the Services. And if you contact Recag, we’ll keep a record of your request to help solve any issues you might be facing.<br />

                                Recag also uses your email address or other personal information to send you messages about the Services and communications from other Members. We may also send you messages related to the Services and the activities of third parties we work with. These messages may be targeted at you based on your activities on our Services, for example your interaction with a particular dataset or your entry into a specific competition. You will have the ability to opt-out of receiving any such communications, either through links provided in the messages, or by updating your Member Account settings through the Services.
                            </div>
                            <div className="privacy-point-title italic">Protect Recag, Our Users, and the Public</div>
                            <div className="point-content">
                                We use information to help improve the safety and reliability of our Services. This includes detecting, preventing, and responding to fraud, abuse, security risks, and technical issues that could harm Recag, our users, or the public. For example, we collect and analyze IP addresses and cookie data to protect against automated abuse. This abuse can take many forms, such as sending spam to Recag users or launching a Distributed Denial of Service (DDoS) attack.<br />

                                We also analyze your content to help us detect abuse such as spam, malware, and illegal content. When we detect spam, malware, illegal content, and other forms of abuse on our systems in violation of our policies, we may disable your account or take other appropriate action. In certain circumstances, we may also report the violation to appropriate authorities.</div>
                            <div className="privacy-point-title">
                                Managing and Deleting Your Information</div>
                            <div className="privacy-point-title italic">
                                Managing, Reviewing, and Updating Your Information</div>
                            <div className="point-content">
                                When you’re signed into your Recag account, you can always review and update information by visiting your account profile.</div>
                            <div className="privacy-point-title italic">Exporting, Removing & Deleting Your Information</div>
                            <div className="point-content">
                                You can export a copy of content in your Recag account if you want to back it up or use it with a service outside of Recag by <a href="#" className="lined"> contacting us here</a>. You may update, correct, or delete your profile information and preferences at any time by accessing your account settings page or editing your Recag account profile through the Services.<br />

                                You can also delete your discussion posts, uploaded datasets, and notebooks by using the available tools in our Services. If desired, you can delete your entire Recag account by choosing that option in your account settings page.<br />

                                Please note that while your deletions are reflected promptly in active member databases, in some cases, we retain data for limited periods when it needs to be kept for legitimate business or legal purposes. See “Data Retention” below for more information.<br />

                                There are other ways to control the information Recag collects whether or not you’re signed in to a Recag account, including configuring your browser to indicate when Recag has set a cookie in your browser. You can also configure your browser to block all cookies from a specific domain or all domains. But remember that our Services rely on cookies to function properly.</div>
                            <div className="privacy-point-title">Data Retention</div>
                            <div className="privacy-point-title italic">
                                Information Retained Until You Remove It</div>
                            <div className="point-content">
                                As we describe above, you can delete your entire Recag account or selectively delete your discussion posts, uploaded datasets, and notebooks by using the available tools in our Services. In some cases, rather than provide a way to delete data, we store it for a predetermined period of time. For each type of data, we set retention timeframes based on the reason for its collection.</div>
                            <div className="privacy-point-title italic">
                                Information Retained For Extended Time Periods for Limited Purposes</div>
                            <div className="point-content">
                                Sometimes business and legal requirements require us to retain certain information for specific purposes for an extended period of time. For example, when you submit an entry in a competition, we may retain this information for a longer period of time to guard against cheating, for example, or for legal purposes. Reasons we might retain some data for longer periods of time include:<br />
                                <ul type="circle">
                                    <li>Security, fraud & abuse prevention</li>
                                    <li>
                                        Financial record-keeping</li>
                                    <li>
                                        Complying with legal or regulatory requirements</li>
                                    <li>
                                        Ensuring the continuity of our services</li>
                                </ul>
                            </div>
                            <div className="privacy-point-title italic">
                                Enabling Safe and Complete Deletion</div>
                            <div className="point-content">
                                When you delete data in your Recag account, we immediately start the process of removing it from the product and our systems. First, we aim to immediately remove it from view. For example, if you delete a post you made, we will immediately remove that from the public-facing Recag website.<br />

                                We then begin a process designed to safely and completely delete the data from our storage systems. Safe deletion is important to protect our users and customers from accidental data loss. Complete deletion of data from our servers is equally important for users’ peace of mind. This process generally takes around 2 months from the time of deletion. This often includes up to a month-long recovery period in case the data was removed unintentionally.<br />

                                Each of our storage systems from which data gets deleted has its own detailed process for safe and complete deletion. This might involve repeated passes through the system to confirm all data has been deleted, or brief delays to allow for recovery from mistakes. As a result, deletion could sometimes take longer when extra time is needed to safely and completely delete the data.<br />

                                Our services also use encrypted backup storage as another layer of protection to help recover from potential disasters. Data can remain on these systems for up to 6 months.<br />

                                As with any deletion process, things like routine maintenance, unexpected outages, bugs, or failures in our protocols may cause delays in the processes and timeframes defined in this article. We maintain systems designed to detect and remediate such issues.</div>
                            <div className="privacy-point-title">Sharing Your Information</div>
                            <div className="privacy-point-title italic">
                                When You Share Your Information</div>
                            <div className="point-content">

                                Many of our Services let you share information with other people, and you have control over how you share. Any information that you voluntarily choose to include in an area of the Services accessible to other Recag members or the public, such as a public profile page or in a forum posting, will be available to other Recag members who access that content or the public (as applicable). This also applies to information you choose to make available through features that connect to third party services, if applicable.<br />

                                Also, if you communicate directly with another Recag member, any information that you voluntarily choose to include in such a communication with other Recag members will be available to such other members. Once you make your information available in any of these ways, it could be collected and used by the recipients without restriction. We urge Recag members to exercise common sense, prudence and good judgment about what information to make available to others through the Services.</div>
                            <div className="privacy-point-title italic">
                                When Recag Shares Your Information</div>
                            <div className="point-content">
                                We do not sell your information. We do, however, disclose your personal information in connection with developing and maintaining the Services and operating Competitions. We share your personal information in the following cases:<br /></div>
                            <div className="privacy-point-title fade">
                                With your consent</div>
                            <div className="point-content">
                                We’ll share personal information outside of Recag when we have your consent. For example, if you give us permission to share your information with a third party who may be a prospective employer.</div>
                            <div className="privacy-point-title fade">

                                To operate competitions</div>
                            <div className="point-content">
                                Recag may disclose your personal information to the hosts of competitions to enable your participation in the competitions and our operation of the competitions. The terms of that disclosure are covered in the competition rules, which is a contract between you and the competition sponsor.</div>
                            <div className="privacy-point-title fade">
                                For external processing</div>
                            <div className="point-content">
                                We provide personal information to our affiliates and other trusted businesses or persons to process it for us, based on our instructions and in compliance with our Privacy Policy and any other appropriate confidentiality and security measures. For example, we use service providers to help us with customer support. These third parties may have access to or process your personal information as a result of performing the services they were engaged to perform.</div>
                            <div className="privacy-point-title fade">For legal reasons</div>
                            <div className="point-content">
                                We will share personal information outside of Recag if we have a good-faith belief that access, use, preservation, or disclosure of the information is reasonably necessary to:<br />
                                <ul type="circle">
                                    <li>
                                        Meet any applicable law, regulation, legal process, or enforceable governmental request.</li>
                                    <li>
                                        Enforce our Terms of Use, including investigation of potential violations, and take precautions against liability.</li>
                                    <li>
                                        Detect, prevent, or otherwise address fraud, abuse, security, or technical issues.</li>
                                    <li>
                                        Protect against harm to the rights, property or safety of Recag or our affiliates, our users, or the public as required or permitted by law.</li>
                                    <li>
                                        Protect the security or integrity of the Services and to protect or enforce third party rights.</li>
                                </ul>

                                We may share non-personally identifiable information publicly and with our partners — like publishers, advertisers, developers, or rights holders. For example, we share information publicly to show trends about the general use of our Services.<br />

                                If Recag is involved in a merger, acquisition, or sale of assets, we’ll continue to ensure the confidentiality of your personal information and give affected users notice before personal information is transferred or becomes subject to a different privacy policy.
                            </div>
                            <div className="privacy-point-title ">
                                Our Commitment to Data Security</div>
                            <div className="point-content">
                                Recag uses a variety of physical, managerial, and technical safeguards designed to improve the security of our systems and your personal information.<br />

                                If Recag learns of a security breach, we will notify you in accordance with applicable law.</div>
                            <div className="privacy-point-title">Third Party Websites</div>
                            <div className="point-content">
                                The Services contain links to websites and services provided by third parties. Any personal information you provide on third party sites or services is provided directly to that third party and is subject to that third party’s policies governing privacy and security. We are not responsible for the content or privacy and security practices and policies of third party sites or services to which links are displayed on the Services. We encourage you to learn about third parties’ privacy and security policies before providing them with personal information.</div>
                            <div className="privacy-point-title">Our Commitment to Children’s Privacy</div>
                            <div className="point-content">
                                Protecting the privacy of children is especially important. For that reason, Recag does not knowingly collect or maintain personal information from persons under 13 years old, and no part of the Services is directed to persons under 13. IF YOU ARE UNDER 13 YEARS OF AGE, PLEASE DO NOT USE OR ACCESS THE SERVICES AT ANY TIME OR IN ANY MANNER.<br />

                                If Recag learns that personal information of children under 13 years old has been collected on the Services without verifiable parental consent, then Recag will take the appropriate steps to delete this information. If you are a parent or guardian and discover that your child under the age of 13 has obtained a user account on the Services, then you may alert Recag at <a href="#" className="lined"> Recag Support</a> and request that Recag delete that child’s personal information from its systems.<br />

                                If you are between the ages of 13 and 16 years old, you may not use the Services until Recag has received verifiable parental consent for your use of the Services. If you are between the ages of 13 and 17 years old or under the age of contractual majority in your country, you also may not enter any competitions until Recag has received verifiable parental consent for your entry into a specific competition. Please check the eligibility rules for each competition to verify that minors are allowed to participate and ensure that the parental consent form is on file for each competition. More information on the parental consent process can be found at <a href="#" className="lined"> Recag Support</a>.</div>
                            <div className="privacy-point-title ">
                                Compliance & Cooperation with Regulators</div>
                            <div className="point-content">
                                We regularly review this Privacy Policy and make sure that we process your information in ways that comply with it.</div>
                            <div className="privacy-point-title italic">Data Transfers</div>
                            <div className="point-content">
                                Your information may be processed on servers located outside of the country where you live. Data protection laws vary among countries, with some providing more protection than others. Regardless of where your information is processed, we apply the same protections described in this policy. We also comply with certain <a href="#" className="lined"> legal frameworks</a> relating to the transfer of data, such as the Data Privacy Framework described below.<br />

                                When we receive formal written complaints, we respond by contacting the person who made the complaint. We work with the appropriate regulatory authorities, including local data protection authorities, to resolve any complaints regarding the transfer of your data that we cannot resolve with you directly.</div>
                            <div className="privacy-point-title italic">European Requirements</div>
                            <div className="point-content">
                                If European Union (EU) data protection law applies to the processing of your information, you can exercise your right to request access to, update, remove, and restrict the processing of your information. You also have the right to object to the processing of your information or export your information to another service. Please visit <a href="#" className="lined">Recag Support</a>  to exercise these rights.<br />

                                If you have any questions, you may contact our data protection office at <a href="#" className="lined"> data-protection-office@Recag.com.</a> If you have concerns regarding your rights under local law, you can contact your local data protection authority. Recag has appointed Google Cloud EMEA Ltd. to act as its local representative under Article 27 of the EU General Data Protection Regulation. Google Cloud EMEA Ltd.’s address is Gordon House, Barrow Street, Dublin 4, Ireland (Registered Number: 660412). Recag has appointed Google UK Limited to act as its local representative under Article 27 of the UK General Data Protection Regulation. Google UK Limited&apos;s address is Belgrave House, 76 Buckingham Palace Road, London, SW1W 9TQ, UK (Registered Number: 03977902).<br />

                                We process your information for the purposes described in this policy, based on the following legal grounds:</div>
                            <div className="privacy-point-title fade">With your consent</div>
                            <div className="point-content">
                                We ask for your agreement to process your information for specific purposes and you have the right to withdraw your consent at any time. You can manage these settings in your Recag account.</div>
                            <div className="privacy-point-title fade">
                                When we’re pursuing legitimate interests</div>
                            <div className="point-content">
                                We process your information for our legitimate interests while applying appropriate safeguards that protect your privacy. This means that we process your information for things like:<br />
                                <ul type="circle">
                                    <li>
                                        Providing, maintaining, and improving our Services to meet the needs of our users</li>
                                    <li>
                                        Developing new products and features that are useful for our users</li>
                                    <li>
                                        Understanding how people use our Services to ensure and improve the performance of our Services</li>
                                    <li>Customizing our Services to provide you with a better user experience</li>
                                    <li>
                                        Marketing to inform users about our Services</li>
                                    <li>
                                        Providing advertising to make many of our Services freely available for users</li>
                                    <li>
                                        Detecting, preventing, or otherwise addressing fraud, abuse, security, or technical issues with our Services</li>
                                    <li>
                                        Protecting against harm to the rights, property or safety of Recag, our users, or the public as required or permitted by law</li>
                                    <li>
                                        Performing research that improves our Services for our users and benefits the public</li>
                                    <li>Fulfilling obligations to our partners like developers and rights holders
                                    </li>
                                    <li>
                                        Enforcing legal claims, including investigation of potential violations of our <a href="#" className="lined">Terms of Use</a> </li>
                                </ul>
                            </div>
                            <div className="privacy-point-title fade">When we’re providing a service</div>
                            <div className="point-content">
                                We process your data to provide a service you’ve asked for under a contract. For example, we process your information in connection with competitions you enter.</div>
                            <div className="privacy-point-title fade">
                                When we’re complying with legal obligations</div>
                            <div className="point-content">
                                We’ll process your data when we have a legal obligation to do so, for example, if we’re responding to legal process or an enforceable governmental request.</div>
                            <div className="privacy-point-title ">Data Privacy Framework</div>
                            <div className="point-content">
                                As described in our parent company Google LLC&apos;s <a href="#" className="lined">Data Privacy Framework certification</a> , we comply with the EU-U.S. Data Privacy Framework (“EU-U.S. DPF”), the UK Extension to the EU-U.S. DPF, and the Swiss-U.S. Data Privacy Framework (“Swiss-U.S. DPF”) (collectively, the &quot;Data Privacy Framework&quot; or “DPF”), as set forth by the U.S. Department of Commerce regarding the collection, use, and retention of personal information received in the U.S. from the EU, UK or Switzerland in reliance on the DPF. Recag has certified to the Department of Commerce that it adheres to the DPF Principles with respect to such information. If there is any conflict between the terms in this Privacy Policy and the DPF Principles, the DPF Principles shall govern. Recag remains responsible for any of your personal information that is shared under the Accountability for Onward Transfer Principle with third parties for external processing performed on our behalf, as described in the “Sharing Your Information” section. To learn more about the DPF certification program, and to view our parent company Google LLC&apos;s certification, please visit the <a href="#" className="lined">Data Privacy Framework website</a>  .<br />

                                If you have an inquiry regarding our privacy practices in relation to our DPF certification, we encourage you to <a href="#" className="lined">contact us
                                </a> . Recag is subject to the investigatory and enforcement powers of the US Federal Trade Commission (FTC). You may also refer a complaint to your local data protection authority and we will work with them to resolve your concern. In certain circumstances, the Data Privacy Framework provides the right to invoke binding arbitration to resolve complaints not resolved by other means, as described in <a href="#" className="lined"> Annex I to the Data Privacy Framework</a>.</div>
                            <div className="privacy-point-title ">Model Contract Clauses</div>
                            <div className="point-content">
                                Model contract clauses are non-modifiable written commitments between parties that can be used as a ground for data transfers from the EU (including the EEA), UK and Switzerland to third countries by providing appropriate data protection safeguards. EU Standard Contractual Clauses (SCCs) have been approved by European Commission. The European Commission (you can see the SCCs adopted by the European Commission <a href="#" className="lined">here</a> ). Such clauses have also been approved for transfers of data to countries outside Switzerland. The UK has approved the International Data Transfer Addendum to the EU SCCs (UK Addendum), which is available <a href="#" className="lined">here</a> . We rely on SCCs and the UK Addendum these model contract clauses for our data transfers, where required.

                            </div>
                            <div className="privacy-point-title ">California Requirements
                            </div>
                            <div className="point-content">
                                If the California Consumer Privacy Act (CCPA) applies to your information, we provide these disclosures and the tools and contact information described in this Privacy Policy so you can exercise your rights to receive information about how Recag collects, uses, and discloses your personal information, to request access to and deletion of your information, and not to be discriminated against for exercising your privacy rights. You can exercise your rights by using these tools, which allow you to access, review, update and delete your information, and you may contact us to export and download a copy of it. You can also read more about Recag’s data retention periods in the “Data Retention” section, and the process we follow to delete your information.<br />

                                Recag does not sell your personal information. We only share your information as described in the “Sharing Your Information” section of this Privacy Policy.<br />

                                The CCPA requires a description of data practices using specific categories. This table uses these categories to organize the information in this Privacy Policy.<br />






                                If you have additional questions or requests related to your rights under the CCPA, you (or your authorized agent) can <a href="#" className="lined">contact Recag</a> .


                            </div>
                            <div className="privacy-point-title">Brazil Requirements</div>
                            <div className="point-content">
                                If Brazilian data protection law applies to the processing of your information, we provide the controls described in this policy so you can exercise your right to:<br />
                                <ul type="circle">
                                    <li>Obtain confirmation on whether we process your information</li>
                                    <li>
                                        Request access to, update, review, anonymise, and remove your information</li>
                                    <li>
                                        Object to or restrict the processing of your information</li>
                                    <li>
                                        Export your information to another service</li>
                                </ul>

                                For users based in Brazil, the data controller responsible for your information is Recag Inc., unless otherwise stated in a service-specific privacy notice. In other words, Recag Inc. is responsible for processing your information and for complying with applicable privacy laws.<br />

                                We process your information for the purposes described in this policy, including:<br />
                                <ul type="circle">
                                    <li>
                                        Providing, maintaining, and improving our services to meet the needs of our users</li>
                                    <li>
                                        Developing new products and features that are useful for our users</li>
                                    <li>
                                        Understanding how people use our services to ensure and improve the performance of our services</li>
                                    <li>
                                        Customizing our services to provide you with a better user experience</li>
                                    <li>
                                        Marketing to inform users about our services</li>
                                    <li>
                                        Providing advertising, which keeps many of our services free</li>
                                    <li>
                                        Detecting, preventing, or otherwise addressing fraud, abuse, security, or technical issues with our services</li>
                                    <li>
                                        Protecting against harm to the rights, property or safety of Recag, our users, or the public as required or permitted by law, including disclosing information to government authorities</li>
                                    <li>
                                        Performing research that improves our services for our users and benefits the public</li>
                                    <li>
                                        Fulfilling obligations to our partners like developers and rights holders</li>
                                    <li>
                                        Enforcing legal obligations or claims, including investigation of potential violations of applicable Terms of Use</li>
                                </ul>
                            </div>
                            <div className="privacy-point-title">Contact information</div>
                            <div className="point-content">If you have questions, you can <a href="#" className="lined">contact Recag</a> . You can also contact your data protection authority if you have concerns regarding your rights under Brazilian law.</div>
                            <div className="privacy-point-title ">
                                Changes and Updates to this Privacy Policy</div>
                            <div className="point-content">

                                We change this Privacy Policy from time to time. We will not reduce your rights under this Privacy Policy without your explicit consent. We always indicate the date the last changes were published and if changes are significant, we’ll provide a more prominent notice (including, for certain services, email notification of Privacy Policy changes).<br />

                                Our amended Privacy Policy will become effective on a going-forward basis as stated in the Terms, except that (i) unless you agree otherwise, we will use your personal information in the manner described in the Privacy Policy in effect when we received that information and (ii) if you do not agree with any changes to the Privacy Policy, you must terminate your Recag membership and cease use of the Services. Your continued use of the Services after a revised Privacy Policy has become effective indicates that you have read, understood and agreed to the current version of the Privacy Policy.<br /></div>
                            <div className="privacy-point-title ">Recag Contact Information</div>
                            <div className="point-content">Please contact Recag with any questions or comments about this Privacy Policy, your personal information, our use and disclosure practices, or your consent choices through <a href="#" className="lined">Recag Support</a> .<br />

                                Specific Contact Emails:<br />
                                <ul type="circle">
                                    <li>
                                        General Privacy: privacy@Recag.com</li>
                                    <li>
                                        Data Protection Office: data-protection-office@Recag.com</li>
                                    <li>
                                        Security: security@Recag.com</li>
                                    <li>
                                        Abuse: abuse@Recag.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
