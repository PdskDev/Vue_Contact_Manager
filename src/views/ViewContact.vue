<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 text-success fw-bold">View contact</p>
        <p class="fst-italic">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
          odio quo sed asperiores animi adipisci quod. Incidunt, pariatur
          impedit. Molestiae?
        </p>
      </div>
    </div>
  </div>
  <!-- spinner-->
  <div v-if="loading">
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <Spinner />
        </div>
      </div>
    </div>
  </div>
  <!--If error occure-->
  <div v-if="!loading && errorMessage">
    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <p class="h3 text-danger fw-bold">{{ errorMessage }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-3" v-if="!loading && isDone()">
    <div class="row align-items-center">
      <div class="col-md-4">
        <img :src="contact.photo" alt="" class="contact-img-big" />
      </div>
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item">
            Name: <span class="fw-bold">{{ contact.name }}</span>
          </li>
          <li class="list-group-item">
            Email: <span class="fw-bold">{{ contact.email }}</span>
          </li>
          <li class="list-group-item">
            Mobile: <span class="fw-bold">{{ contact.mobile }}</span>
          </li>
          <li class="list-group-item">
            Company: <span class="fw-bold">{{ contact.company }}</span>
          </li>
          <li class="list-group-item">
            Title: <span class="fw-bold">{{ contact.title }}</span>
          </li>
          <li class="list-group-item">
            Group: <span class="fw-bold">{{ group.name }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <router-link to="/" class="btn btn-success mt-3"
          ><i class="fa fa-arrow-alt-circle-left"></i> Back</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ContactService } from '@/services/ContactService';
import Spinner from '@/components/Spinner.vue';
export default {
  name: 'ViewContact',
  data: function () {
    return {
      contactId: this.$route.params.contactId,
      loading: false,
      contact: {},
      group: {},
      errorMessage: null,
    };
  },
  created: async function () {
    try {
      this.loading = true;
      let response = await ContactService.getOneContact(this.contactId);
      let groupResponse = await ContactService.getOneGroup(response.data);
      this.contact = response.data;
      this.group = groupResponse.data;
      this.loading = false;
    } catch (error) {
      this.errorMessage = error;
      this.loading = false;
    }
  },
  methods: {
    isDone: function () {
      return (
        Object.keys(this.contact).length > 0 &&
        Object.keys(this.group).length > 0
      );
    },
  },
  components: { Spinner },
};
</script>

<style scoped></style>
