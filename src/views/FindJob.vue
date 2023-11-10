<template>
    <div class="bg-gray-100 min-h-screen">
        <Navbar />
        <div class="container mx-auto">
            <div class="flex items-center justify-center gap-3 my-9">
                <div class="bg-gray-900 text-white cursor-pointer p-3 px-5 rounded-3xl">Best Match</div>
                <div class="bg-white text-gray-600 cursor-pointer p-3 px-5 rounded-3xl">Newest</div>
                <div class="bg-white text-gray-600 cursor-pointer p-3 px-5 rounded-3xl">Highest</div>
                <input
                    type="text"
                    v-model="searchQuery"
                    placeholder="Search job"
                    class="p-3 px-5 rounded-3xl min-w-[30em] flex-1"
                />
                <div class="flex items-center gap-2">
                    <Icon icon="teenyicons:pin-outline" />
                    <input
                        type="text"
                        v-model="locationQuery"
                        class="p-3 px-5 rounded-3xl min-w-[20em]"
                        placeholder="City or country"
                    />
                </div>
                <button @click="searchJobs" class="bg-red-600 text-white px-4 py-3 rounded-3xl">
                    Search
                </button>
            </div>
            <div v-if="loading">Loading...</div>
            <div v-else>
                <div class="flex flex-row">
                    <div class="basis-3/12 p-3">
                        <h2 class="font-semibold text-2xl mb-5"># Available Jobs <span class="px-3 p-1 rounded-3xl bg-red-700 text-white inline-block">712</span></h2>
                        <ul class="overflow-auto max-h-[60em] scroll-smooth">
                            <div v-for="job in jobs.hits">
                                <li class="cursor-pointer" @click="getJobDetail(job.id)">
                                    <div class="bg-white p-3 mb-3 rounded-xl">
                                        <div class="flex items-center gap-3">
                                            <img src="../../public/placeholder_company.png" alt="Company Logo" class="max-w-[3em] rounded-lg">
                                            <div>
                                                <h3 class="font-bold text-red-700">{{job.title}}</h3>
                                                <p class="text-sm mb-2">{{job.company_name}}</p>
                                                <p class="text-sm text-gray-400 mb-2">{{job.location}}</p>
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="flex items-center justify-between gap-3 my-2 mt-3">
                                            <div class="flex items-center gap-2">
                                                <Icon icon="solar:money-bag-bold" class="text-red-700" />
                                                <span class="text-sm text-gray-500">up to {{job.salary.max}}$/{{job.salary.type}}</span>
                                            </div>
                                            <div class="flex items-center gap-2">
                                                <Icon icon="majesticons:arrow-right" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </div>
                        </ul>
                    </div>
                    <div class="basis-6/12 p-3">
                        <div v-if="loadingDetail">
                            <div class="h-full w-full border-4 border-dash rounded-xl p-7 flex items-center justify-center">
                                <div class="text-2xl text-gray-400">
                                    Loading... Pilih job, untuk melihat detail job
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <div class="h-full w-full bg-white rounded-xl p-7">
                                <h1 class="font-semibold text-3xl mb-2">{{detail.job_title}}</h1>
                                <div class="flex items-center gap-3">
                                    <div class="flex items-center gap-2">
                                        <Icon icon="solar:money-bag-bold" class="text-red-700" />
                                        <span class="text-sm text-gray-500">up to ${{detail.salary?.min}}/{{detail.salary?.type}}</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <Icon icon="teenyicons:pin-outline" class="text-red-700" />
                                        <span class="text-sm text-gray-500">{{detail.location}}</span>
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
                                            <span class="bg-green-100 text-green-700 p-1 px-3 rounded-lg">{{detail.job_type}}</span>
                                        </div>
                                    </div>
                                    <hr class="my-5">
                                    <h3 class="font-semibold text-xl mb-3">About The Job</h3>
                                    <div class="max-h-[45em] overflow-auto scroll-vertikal">
                                        <div class="text-sm">
                                            <div v-html="detail.description"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="basis-3/12 p-3">
                        <div v-if="loadingDetail">
                            <div class="border-4 h-[15em] flex items-center justify-center rounded-2xl p-3">
                                <span class="text-xl text-gray-400">Loading About Company...</span>
                            </div>
                        </div>
                        <div v-else>
                            <div class="bg-white rounded-2xl p-3">
                                <img src="../../public/placeholder_company.png" alt="Placeholder Company PP" class="w-full max-w-[5em] block rounded-lg mx-auto my-2">
                                <div class="text-center">
                                    <h4 class="font-semibold">{{detail.company?.name}}</h4>
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
        </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import { Icon } from '@iconify/vue';
import axios from 'axios';

export default {
    components: {
        Navbar,
        Icon
    },
    data() {
        return {
            jobs: [],
            detail: '',
            loading: false,
            loadingDetail: false,
            searchQuery: '',
            locationQuery: '',
        };
    },
    mounted() {
        this.fetchJobs();
    },
    methods: {
        async searchJobs() {
            try {
                this.loading = true;
                const response = await axios.get('https://indeed12.p.rapidapi.com/jobs/search', {
                    params: {
                        query: this.searchQuery,
                        location: this.locationQuery,
                        page_id: '1',
                        fromage: '3',
                        radius: '50',
                    },
                    headers: {
                        'X-RapidAPI-Key': '3823dd20e6mshe0de8813b680334p17ce18jsn25e7ad107002',
                        'X-RapidAPI-Host': 'indeed12.p.rapidapi.com',
                    },
                });
                console.log('API Response:', response.data);
                this.jobs = response.data;
            } catch (error) {
                console.error('Error fetching list jobs:', error);
            } finally {
                this.loading = false;
            }
        },
        async fetchJobs() {
            try {
                this.loading = true;
                const response = await axios.get('https://indeed12.p.rapidapi.com/jobs/search', {
                    params: {
                        query: 'manager',
                        location: 'chicago',
                        page_id: '1',
                        fromage: '3',
                        radius: '50'
                    },
                    headers: {
                        'X-RapidAPI-Key': '3823dd20e6mshe0de8813b680334p17ce18jsn25e7ad107002',
                        'X-RapidAPI-Host': 'indeed12.p.rapidapi.com'
                    }
                });
                console.log('API Response:', response.data);
                this.jobs = response.data;
            } catch (error) {
                console.error('Error fetching list jobs:', error);
            } finally {
                this.loading = false;
            }
        },
        async getJobDetail(id) {
            try {
                this.loadingDetail = true;
                const response = await axios.get('https://indeed12.p.rapidapi.com/job/'+id, {
                    headers: {
                        'X-RapidAPI-Key': '3823dd20e6mshe0de8813b680334p17ce18jsn25e7ad107002',
                        'X-RapidAPI-Host': 'indeed12.p.rapidapi.com'
                    }
                });
                console.log('API Response:', response.data);
                this.detail = response.data;
            } catch (error) {
                console.error('Error fetching detail job:', error);
            } finally {
                this.loadingDetail = false;
            }
        },
    }
}
</script>