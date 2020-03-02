<template>
  <div style="width: auto;">
    <router-link class="item-link" :to="{ name: 'about-page' }">
      <b-card
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="width: 100%;"
        class="mb-2 item-link"
        :id="'popover-target'+id"
      >
        <div>
          <h6 class="text-left" style="color: black">{{SummaryTitle}}</h6>
          <p class="text-left" style="color:black;font-weight: 200">
            <i>{{SummaryAuthor}}</i>
            {{id}}
          </p>
        </div>
        <b-popover :target="'popover-target'+id" triggers="hover" placement="left">
          <template v-slot:title>Popover Title</template>
          I am popover
          <b>component</b> content!
        </b-popover>
      </b-card>
    </router-link>
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      Item: {
        title: "Become a Product Manager | Learn the Skills & Get the Job",
        author: "ABCXYZ",
        content:
          "The most complete course available on Product Management. 13+ hours of videos, activities, interviews, & more",
        stars: 5,
        sold: 20000
      }
    };
  },
  computed: {
    SummaryTitle() {
      if (this.Item.title.length > 20) {
        return this.Item.title.replace(0, 20) + "...";
      } else return this.Item.title;
    },
    SummaryAuthor() {
      if (this.Item.author.length > 15) {
        return this.Item.author.replace(0, 15) + "...";
      } else return this.Item.author;
    }
  }
};
</script>
<style lang="scss" scoped>
.item-link {
  text-decoration: none;
  &:hover {
    -webkit-box-shadow: 0px 5px 8px 1px rgba(226, 223, 223, 1);
    -moz-box-shadow: 0px 5px 8px 1px rgba(226, 223, 223, 1);
    box-shadow: 0px 5px 8px 1px rgba(226, 223, 223, 1);
  }
}
</style>