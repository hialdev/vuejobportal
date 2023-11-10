<template>
    <div class="bg-gray-100 min-h-screen">
        <Navbar />
        <div class="container mx-auto">
            <div class="flex items-center justify-center gap-3 my-9">
                <div class="bg-gray-900 text-white cursor-pointer p-3 px-5 rounded-3xl">Best Match</div>
                <div class="bg-white text-gray-600 cursor-pointer p-3 px-5 rounded-3xl">Newest</div>
                <div class="bg-white text-gray-600 cursor-pointer p-3 px-5 rounded-3xl">Highest</div>
                <input type="text" id="" placeholder="Search job" class="p-3 px-5 rounded-3xl min-w-[30em] flex-1">
                <div class="flex items-center gap-2">
                    <Icon icon="teenyicons:pin-outline" />
                    <input type="text" class="p-3 px-5 rounded-3xl min-w-[20em]" placeholder="City or country">
                </div>
            </div>
            <div class="flex flex-row">
                <div class="basis-3/12 p-3">
                    <h2 class="font-semibold text-2xl mb-5"># Available Jobs <span class="px-3 p-1 rounded-3xl bg-red-700 text-white inline-block">712</span></h2>
                    <ul class="overflow-auto max-h-[60em] scroll-smooth">
                        <li class="cursor-pointer">
                            <div class="bg-white p-3 mb-3 rounded-xl">
                                <div class="flex items-center gap-3">
                                    <img src="../../public/placeholder_company.png" alt="Company Logo" class="max-w-[3em] rounded-lg">
                                    <div>
                                        <h3 class="font-bold text-red-700">Title Jobs Max Two Lines</h3>
                                        <p class="text-sm mb-2">Company Name</p>
                                        <p class="text-sm text-gray-400 mb-2">Jakarta, Indonesia</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="flex items-center justify-between gap-3 my-2 mt-3">
                                    <div class="flex items-center gap-2">
                                        <Icon icon="solar:money-bag-bold" class="text-red-700" />
                                        <span class="text-sm text-gray-500">8.000.000 IDR/month</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <Icon icon="majesticons:arrow-right" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="cursor-pointer">
                            <div class="bg-white p-3 mb-3 rounded-xl">
                                <div class="flex items-center gap-3">
                                    <img src="../../public/placeholder_company.png" alt="Company Logo" class="max-w-[3em] rounded-lg">
                                    <div>
                                        <h3 class="font-bold text-red-700">Title Jobs Max Two Lines</h3>
                                        <p class="text-sm mb-2">Company Name</p>
                                        <p class="text-sm text-gray-400 mb-2">Jakarta, Indonesia</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="flex items-center justify-between gap-3 my-2 mt-3">
                                    <div class="flex items-center gap-2">
                                        <Icon icon="solar:money-bag-bold" class="text-red-700" />
                                        <span class="text-sm text-gray-500">8.000.000 IDR/month</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <Icon icon="majesticons:arrow-right" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="cursor-pointer">
                            <div class="bg-white p-3 mb-3 rounded-xl">
                                <div class="flex items-center gap-3">
                                    <img src="../../public/placeholder_company.png" alt="Company Logo" class="max-w-[3em] rounded-lg">
                                    <div>
                                        <h3 class="font-bold text-red-700">Title Jobs Max Two Lines</h3>
                                        <p class="text-sm mb-2">Company Name</p>
                                        <p class="text-sm text-gray-400 mb-2">Jakarta, Indonesia</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="flex items-center justify-between gap-3 my-2 mt-3">
                                    <div class="flex items-center gap-2">
                                        <Icon icon="solar:money-bag-bold" class="text-red-700" />
                                        <span class="text-sm text-gray-500">8.000.000 IDR/month</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <Icon icon="majesticons:arrow-right" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="cursor-pointer">
                            <div class="bg-white p-3 mb-3 rounded-xl">
                                <div class="flex items-center gap-3">
                                    <img src="../../public/placeholder_company.png" alt="Company Logo" class="max-w-[3em] rounded-lg">
                                    <div>
                                        <h3 class="font-bold text-red-700">Title Jobs Max Two Lines</h3>
                                        <p class="text-sm mb-2">Company Name</p>
                                        <p class="text-sm text-gray-400 mb-2">Jakarta, Indonesia</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="flex items-center justify-between gap-3 my-2 mt-3">
                                    <div class="flex items-center gap-2">
                                        <Icon icon="solar:money-bag-bold" class="text-red-700" />
                                        <span class="text-sm text-gray-500">8.000.000 IDR/month</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <Icon icon="majesticons:arrow-right" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="cursor-pointer">
                            <div class="bg-white p-3 mb-3 rounded-xl">
                                <div class="flex items-center gap-3">
                                    <img src="../../public/placeholder_company.png" alt="Company Logo" class="max-w-[3em] rounded-lg">
                                    <div>
                                        <h3 class="font-bold text-red-700">Title Jobs Max Two Lines</h3>
                                        <p class="text-sm mb-2">Company Name</p>
                                        <p class="text-sm text-gray-400 mb-2">Jakarta, Indonesia</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="flex items-center justify-between gap-3 my-2 mt-3">
                                    <div class="flex items-center gap-2">
                                        <Icon icon="solar:money-bag-bold" class="text-red-700" />
                                        <span class="text-sm text-gray-500">8.000.000 IDR/month</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <Icon icon="majesticons:arrow-right" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="cursor-pointer">
                            <div class="bg-white p-3 mb-3 rounded-xl">
                                <div class="flex items-center gap-3">
                                    <img src="../../public/placeholder_company.png" alt="Company Logo" class="max-w-[3em] rounded-lg">
                                    <div>
                                        <h3 class="font-bold text-red-700">Title Jobs Max Two Lines</h3>
                                        <p class="text-sm mb-2">Company Name</p>
                                        <p class="text-sm text-gray-400 mb-2">Jakarta, Indonesia</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="flex items-center justify-between gap-3 my-2 mt-3">
                                    <div class="flex items-center gap-2">
                                        <Icon icon="solar:money-bag-bold" class="text-red-700" />
                                        <span class="text-sm text-gray-500">8.000.000 IDR/month</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <Icon icon="majesticons:arrow-right" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="cursor-pointer">
                            <div class="bg-white p-3 mb-3 rounded-xl">
                                <div class="flex items-center gap-3">
                                    <img src="../../public/placeholder_company.png" alt="Company Logo" class="max-w-[3em] rounded-lg">
                                    <div>
                                        <h3 class="font-bold text-red-700">Title Jobs Max Two Lines</h3>
                                        <p class="text-sm mb-2">Company Name</p>
                                        <p class="text-sm text-gray-400 mb-2">Jakarta, Indonesia</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="flex items-center justify-between gap-3 my-2 mt-3">
                                    <div class="flex items-center gap-2">
                                        <Icon icon="solar:money-bag-bold" class="text-red-700" />
                                        <span class="text-sm text-gray-500">8.000.000 IDR/month</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <Icon icon="majesticons:arrow-right" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="cursor-pointer">
                            <div class="bg-white p-3 mb-3 rounded-xl">
                                <div class="flex items-center gap-3">
                                    <img src="../../public/placeholder_company.png" alt="Company Logo" class="max-w-[3em] rounded-lg">
                                    <div>
                                        <h3 class="font-bold text-red-700">Title Jobs Max Two Lines</h3>
                                        <p class="text-sm mb-2">Company Name</p>
                                        <p class="text-sm text-gray-400 mb-2">Jakarta, Indonesia</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="flex items-center justify-between gap-3 my-2 mt-3">
                                    <div class="flex items-center gap-2">
                                        <Icon icon="solar:money-bag-bold" class="text-red-700" />
                                        <span class="text-sm text-gray-500">8.000.000 IDR/month</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <Icon icon="majesticons:arrow-right" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="cursor-pointer">
                            <div class="bg-white p-3 mb-3 rounded-xl">
                                <div class="flex items-center gap-3">
                                    <img src="../../public/placeholder_company.png" alt="Company Logo" class="max-w-[3em] rounded-lg">
                                    <div>
                                        <h3 class="font-bold text-red-700">Title Jobs Max Two Lines</h3>
                                        <p class="text-sm mb-2">Company Name</p>
                                        <p class="text-sm text-gray-400 mb-2">Jakarta, Indonesia</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="flex items-center justify-between gap-3 my-2 mt-3">
                                    <div class="flex items-center gap-2">
                                        <Icon icon="solar:money-bag-bold" class="text-red-700" />
                                        <span class="text-sm text-gray-500">8.000.000 IDR/month</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <Icon icon="majesticons:arrow-right" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="cursor-pointer">
                            <div class="bg-white p-3 mb-3 rounded-xl">
                                <div class="flex items-center gap-3">
                                    <img src="../../public/placeholder_company.png" alt="Company Logo" class="max-w-[3em] rounded-lg">
                                    <div>
                                        <h3 class="font-bold text-red-700">Title Jobs Max Two Lines</h3>
                                        <p class="text-sm mb-2">Company Name</p>
                                        <p class="text-sm text-gray-400 mb-2">Jakarta, Indonesia</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="flex items-center justify-between gap-3 my-2 mt-3">
                                    <div class="flex items-center gap-2">
                                        <Icon icon="solar:money-bag-bold" class="text-red-700" />
                                        <span class="text-sm text-gray-500">8.000.000 IDR/month</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <Icon icon="majesticons:arrow-right" />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="cursor-pointer">
                            <div class="bg-white p-3 mb-3 rounded-xl">
                                <div class="flex items-center gap-3">
                                    <img src="../../public/placeholder_company.png" alt="Company Logo" class="max-w-[3em] rounded-lg">
                                    <div>
                                        <h3 class="font-bold text-red-700">Title Jobs Max Two Lines</h3>
                                        <p class="text-sm mb-2">Company Name</p>
                                        <p class="text-sm text-gray-400 mb-2">Jakarta, Indonesia</p>
                                    </div>
                                </div>
                                <hr>
                                <div class="flex items-center justify-between gap-3 my-2 mt-3">
                                    <div class="flex items-center gap-2">
                                        <Icon icon="solar:money-bag-bold" class="text-red-700" />
                                        <span class="text-sm text-gray-500">8.000.000 IDR/month</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <Icon icon="majesticons:arrow-right" />
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="basis-6/12 p-3">
                    <div class="h-full w-full bg-white rounded-xl p-7">
                        <h1 class="font-semibold text-3xl mb-2">Start Up Founder</h1>
                        <div class="flex items-center gap-3">
                            <div class="flex items-center gap-2">
                                <Icon icon="solar:money-bag-bold" class="text-red-700" />
                                <span class="text-sm text-gray-500">8.000.000 IDR/month</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <Icon icon="teenyicons:pin-outline" class="text-red-700" />
                                <span class="text-sm text-gray-500">Jakarta, Indonesia</span>
                            </div>
                        </div>
                        <div class="flex items-center gap-3 my-4">
                            <div class="flex items-center cursor-pointer gap-2 p-2 px-3 rounded-xl bg-red-700 border-2 border-red-700 text-white">
                                Apply
                                <Icon icon="tabler:arrow-bar-up" />
                            </div>
                            <div class="flex items-center cursor-pointer gap-2 p-2 px-3 rounded-xl border-red-100 border-2 text-red-700 hover:bg-red-100">
                                Save
                                <Icon icon="subway:mark-2" />
                            </div>
                        </div>
                        <div class="">
                            <div class="flex items-center gap-2">
                                <Icon icon="material-symbols:work" />
                                <span class="text-sm">Job Type : </span>
                                <div class="flex items-center gap-2">
                                    <span class="bg-green-100 text-green-700 p-1 px-3 rounded-lg">Remote</span>
                                    <span class="bg-green-100 text-green-700 p-1 px-3 rounded-lg">Full time</span>
                                </div>
                            </div>
                            <hr class="my-5">
                            <h3 class="font-semibold text-xl mb-3">About The Job</h3>
                            <div class="max-h-[45em] overflow-auto scroll-vertikal">
                                <span class="text-sm">
                                    <p><!---->Hello Indonesia! 🇮🇩 Are you an exceptional people with<span class="white-space-pre"> </span><strong><!---->strong backgrounds in building business, finance, strategy planning and/or managing business processes<!----></strong><span class="white-space-pre"> </span>looking to build an innovative tech companies from scratch? If yes, we would like to hear from you!<!----></p><p><br></p><p><strong><!---->About Antler<!----></strong></p><p><!---->Antler is a global early-stage VC enabling and investing in the world's most exceptional people. Our six-month program brings together experienced and driven professionals from diverse backgrounds to build strong teams and launch their own companies to seed round. We are present in 25 locations worldwide, we have supported 5000+ founders through our program, invested in 600+ startups, and received over 50,000+ applications.<!----></p><p><br></p><p><!---->Antler enables exceptional people to build impactful technology startups by helping form complementary co-founder teams, supporting teams with deep business model validation and providing a global platform for scaling startups to maximize their impact. At Antler you can expect to meet like-minded entrepreneurs, co-founders, and field experts, it’s a place where the top talent comes together and builds the defining companies of tomorrow.<!----></p><p><br></p><p><strong><!---->Details of the program<!----></strong></p><p><!---->1. The program runs for an initial 10 weeks in Jakarta Indonesia and starting in<!----><strong><span class="white-space-pre"> </span>Mid February 2024<!----></strong></p><p><br></p><p><!---->2. In the first phase (10 weeks), you are required to ideate and find your co-founder(s) from the cohort of 50-70 founders.<!----></p><p><br></p><p><!---->3. At the end of first phase, you will present your team and business idea to the Antler Investment Committee. If accepted, you will receive a pre-seed investment of US$125,000 for 10% equity.<!----></p><p><br></p><p><!---->4. If you get the investment, you will continue to be part of the program for another 3 months (second phase) throughout which Antler will work closely with you to accelerate your growth. At the end of second phase, Antler arranges a Demo Day where we invite VCs, institutional investors, and angel investors to help you connect with investors and raise your later investment round.<!----></p><p><br></p><p><strong><!---->Who gets selected<!----></strong></p><p><!---->From experienced business operators to technologists and serial entrepreneurs, we work with skilled founders regardless of background or geography.<!----></p><p><!---->The founders of our portfolio companies represent more than 70 nationalities. Nearly 40% of our startups have at least one female co-founder. We look for people with:<!----></p>      <ul><li><strong><!---->Inner drive<!----></strong><!---->: You're a self-starter and can motivate yourself and others to join your mission. You set high goals and have proven to achieve them.<!----></li><li><strong><!---->Expert experience in senior business development<!----></strong><span class="white-space-pre"> </span>- looking to start a new venture that has the potential to become a unicorn. You will play an instrumental role in building this new venture where you have identified a clear problem and are able to build out the solution together with the co-founder(s) you will meet at Antler.<!----></li><li><strong><!---->A clear spike<!----></strong><!---->: That strong attribute which enables your skills and experiences to stand out from the crowd. You have deep knowledge in an area where you can form a foundation of your company's competitive advantage.<!----></li><li><!---->Startup founders, serial entrepreneurs, and strong business leaders that love building new products and teams.<!----></li><li><strong><!---->Grit<!----></strong><!---->: Your source of energy never runs low. You always find a window when the door closes. You have the willingness and ability to keep going when you're faced with obstacles.<!----></li></ul>
                                    <p><br></p><p><!---->What you can expect from Antler<!----></p>      <ul><li><strong><!---->Find Your Co-Founder<!----></strong><span class="white-space-pre"> </span>–<!----><em><span class="white-space-pre"> </span>We actively support you to find the ideal co-founder. We select the top ~60-80 entrepreneurs out of thousands of applicants to join our cohort. The first two month is centered around supporting and facilitating sessions to ensure founders get every opportunity to meet their ideal co-founders from a diverse cohort of industry, commercial and technology leaders<!----></em></li><li><strong><!---->Validate Your Idea(s)<!----></strong><span class="white-space-pre"> </span>–<span class="white-space-pre"> </span><em><!---->Founders go through a thorough problem and idea validation process; startups drive to first customer acquisition results with help of dedicated coaches<!----></em></li><li><strong><!---->Access A Global Advisory Network<span class="white-space-pre"> </span></strong><!---->-<span class="white-space-pre"> </span><em><!---->We provide hands-on support through an exceptional network of 475+ global and local advisors to give our founders an unfair advantage and all teams are invited to our alumni network and have direct access to other like-minded founders.<!----></em></li><li><strong><!---->Potential Pre-Seed Funding<!----></strong><span class="white-space-pre"> </span>-<span class="white-space-pre"> </span><em><!---->At the end of the first phase, you will present your business idea with your team to the Antler Investment Committee. If accepted, you will receive a pre-seed investment of US$125,000 for 10% equity. Antler will work closely with you to accelerate your growth. At the end of second phase, Antler arranges a Demo Day where we invite VCs, institutional investors, and angel investors to help you connect with investors and raise your later investment round.<!----></em></li></ul>
                <!---->         </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="basis-3/12 p-3">
                    <div class="bg-white rounded-2xl p-3">
                        <img src="../../public/placeholder_company.png" alt="Placeholder Company PP" class="w-full max-w-[5em] block rounded-lg mx-auto my-2">
                        <div class="text-center">
                            <h4 class="font-semibold">Company Name</h4>
                            <div class="flex items-center justify-center gap-2">
                                <Icon icon="ph:star-fill" class="text-orange-600" />
                                <Icon icon="ph:star-fill" class="text-orange-600" />
                                <Icon icon="ph:star-fill" class="text-orange-600" />
                                <Icon icon="ph:star-fill" class="text-orange-600" />
                                <Icon icon="ph:star-half-fill" class="text-orange-600" />
                                <span class="">4.9</span>
                            </div>
                            <div class="text-sm text-gray-600">(17 Reviews)</div>
                        </div>
                    </div>
                    <h5 class="font-semibold my-3">Latest Review</h5>
                    <div class="bg-white rounded-2xl p-3 mb-3">
                        <div class="flex items-center gap-2">
                            <img src="../../public/male_avatar.svg" alt="Avatar Testi" class="max-w-[3em] rounded-lg">
                            <p class="text-sm line-clamp-3 italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio a assumenda quos quo illo nostrum praesentium eligendi unde blanditiis ab eos modi repellat error asperiores cum tenetur numquam, minima recusandae?</p>
                        </div>
                        <div class="flex items-center gap-2 justify-between pt-2">
                            <div class="flex items-center gap-2">
                                <Icon icon="ph:star-fill" class="text-orange-600" />
                                4.9
                            </div>
                            <span class="text-xs text-gray-500">02 Des 23</span>
                        </div>
                    </div>
                    <div class="bg-white rounded-2xl p-3 mb-3">
                        <div class="flex items-center gap-2">
                            <img src="../../public/male_avatar.svg" alt="Avatar Testi" class="max-w-[3em] rounded-lg">
                            <p class="text-sm line-clamp-3 italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio a assumenda quos quo illo nostrum praesentium eligendi unde blanditiis ab eos modi repellat error asperiores cum tenetur numquam, minima recusandae?</p>
                        </div>
                        <div class="flex items-center gap-2 justify-between pt-2">
                            <div class="flex items-center gap-2">
                                <Icon icon="ph:star-fill" class="text-orange-600" />
                                4.9
                            </div>
                            <span class="text-xs text-gray-500">02 Des 23</span>
                        </div>
                    </div>
                    <div class="bg-white rounded-2xl p-3 mb-3">
                        <div class="flex items-center gap-2">
                            <img src="../../public/male_avatar.svg" alt="Avatar Testi" class="max-w-[3em] rounded-lg">
                            <p class="text-sm line-clamp-3 italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio a assumenda quos quo illo nostrum praesentium eligendi unde blanditiis ab eos modi repellat error asperiores cum tenetur numquam, minima recusandae?</p>
                        </div>
                        <div class="flex items-center gap-2 justify-between pt-2">
                            <div class="flex items-center gap-2">
                                <Icon icon="ph:star-fill" class="text-orange-600" />
                                4.9
                            </div>
                            <span class="text-xs text-gray-500">02 Des 23</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import { Icon } from '@iconify/vue';

export default {
    components: {
        Navbar,
        Icon
    }
}
</script>