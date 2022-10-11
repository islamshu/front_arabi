import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
// import AboutView from "../views/AboutView.vue";
import blog from "../views/Blog.vue";
import OurServices from "../views/OurServices.vue";
import store from "../views/Store.vue";
import pdocast from "../views/ArabiPodcast.vue";
import allPodcast from "../views/podcast.vue"
import marketers from "../views/marketers.vue"
import service from "../views/service.vue"
import videos from "../views/videos.vue"
import blogItem from "../views/blogItem.vue"
import Consulting from "../views/Consulting.vue"
import userProfile from "../views/userProfile.vue"
import marketerProfile from "../views/marketerProfile.vue"
import ConsultingItems from "../views/ConsultingItems.vue"
import CreateConsultation from "../views/CreateConsultation.vue"
import CreateConsultationTwo from "../views/CreateConsultationTwo.vue"
import CreatePodcast from "../views/CreatePodcast.vue"
import CreateVideo from "../views/CreateVideo.vue"
import CreateService from "../views/CreateService.vue"
import CreateBlog from "../views/CreateBlog.vue"
import ReplyQuestion from "../views/ReplyQuestion.vue"
import registration from "../views/registration.vue"
import registrationTwo from "../views/registrationTwo.vue"
import shareProfile from "../views/shareProfile.vue"
import CreateProfile from "../views/CreateProfile.vue"
import CreateTicket from "../views/CreateTicket.vue"
import Ticket from "../views/Ticket.vue"



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: AboutView,
  // },
  {
    path: "/blog",
    name: "blog",
    component: blog,
  },
  {
    path: "/blog/blogItem",
    name: "blogItem",
    component: blogItem,
  },
  {
    path: "/OurServices",
    name: "OurServices",
    component: OurServices,
  },
  {
    path: "/store",
    name: "store",
    component: store,
  },
  {
    path: "/pdocast",
    name: "pdocast",
    component: pdocast,
  },
  {
    path: "/pdocast/allPodcast",
    name: "allPodcast",
    component: allPodcast,
  },
  {
    path: "/marketers",
    name: "marketers",
    component: marketers,
  },
  {
    path: "/OurServices/service",
    name: "service",
    component: service,
  },
  {
    path: "/videos",
    name: "videos",
    component: videos,
  },
  {
    path: "/Consulting",
    name: "Consulting",
    component: Consulting,
  },
  {
    path: "/userProfile",
    name: "userProfile",
    component: userProfile,
  }, 
  {
    path: "/marketerProfile",
    name: "marketerProfile",
    component: marketerProfile,
  },

  {
    path: "/ConsultingItems",
    name: "ConsultingItems",
    component: ConsultingItems,
  },

  {
    path: "/CreateConsultation",
    name: "CreateConsultation",
    component: CreateConsultation,
  },

  {
    path: "/CreateConsultationTwo",
    name: "CreateConsultationTwo",
    component: CreateConsultationTwo,
  },

  
  {
    path: "/CreatePodcast",
    name: "CreatePodcast",
    component: CreatePodcast,
  },
  {
    path: "/CreateVideo",
    name: "CreateVideo",
    component: CreateVideo,
  },

  {
    path: "/CreateService",
    name: "CreateService",
    component: CreateService,
  },

  {
    path: "/CreateBlog",
    name: "CreateBlog",
    component: CreateBlog,
  },

  {
    path: "/ReplyQuestion",
    name: "ReplyQuestion",
    component: ReplyQuestion,
  },

  {
    path: "/registration",
    name: "registration",
    component: registration,
  },

  {
    path: "/registrationTwo",
    name: "registrationTwo",
    component: registrationTwo,
  },

  {
    path: "/shareProfile",
    name: "shareProfile",
    component: shareProfile,
  },

  {
    path: "/CreateProfile",
    name: "CreateProfile",
    component: CreateProfile,
  },

  {
    path: "/CreateTicket",
    name: "CreateTicket",
    component: CreateTicket,
  },

  {
    path: "/Ticket",
    name: "Ticket",
    component: Ticket,
  },

  





  

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
