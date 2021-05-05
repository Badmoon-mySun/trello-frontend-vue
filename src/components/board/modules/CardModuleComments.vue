<template>
  <div class="module">
    <div class="module__header">
      <div class="header__title">
        <div class="title__icon card_icon">
          <img src="../../../assets/img/comment.svg" alt="" width="32" height="32">
        </div>
        <div class="title__text">
          <h4>Комментарии</h4>
        </div>
      </div>
    </div>
    <div class="module__body">
      <div class="module__body__comment_input">
        <div class="comment_input__image comment_avatar_holder">
          <img class="image__user_avatar avatar" src="../../../assets/img/avatar.png" alt="">
        </div>
        <div class="comment_input__input_holder">
          <textarea class="input_holder__textarea" placeholder="Напишите комментарий…"></textarea>
          <div class="input_holder__add_btn_group">
            <button class="add_btn_group__add" type="button">Сохранить</button>
          </div>
        </div>
      </div>
      <div class="module__body__comments_holder">
        <div class="comments_holder__comment">
          <div class="comment__comment_header comment_avatar_holder">
            <img class="comment_header__avatar avatar" src="../../../assets/img/avatar.png" alt="">
          </div>
          <div class="comment__comment_body">
            <div class="comment_body__comment_title">
              <span class="comment_title__username">Anvar</span>
              <span class="comment_title__datetime">12.12.2001 12:23</span>
            </div>
            <div class="comment_body__comment_text">
              <span class="comment_text">Hello</span>
            </div>
          </div>
        </div>
        <div class="comments_holder__comment">
          <div class="comment__comment_header comment_avatar_holder">
            <img class="comment_header__avatar avatar" src="../../../assets/img/avatar.png" alt="">
          </div>
          <div class="comment__comment_body">
            <div class="comment_body__comment_title">
              <span class="comment_title__username">Anvar</span>
              <span class="comment_title__datetime">12.12.2001 12:23</span>
            </div>
            <div class="comment_body__comment_text">
              <span class="comment_text">Hello</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardModuleComments"
}
</script>

<style scoped lang="scss">
.module {
  @include card-module;

  &__body {
    margin: 0;

    &__comment_input {
      display: flex;
    }
  }
}

.comment_input__input_holder {
  flex-grow: 1;
  margin-bottom: .5rem;

  @include card-input-holder;

  & textarea {
    border: 2px solid #0079bf;
    height: 6rem;
  }

}

.comment_avatar_holder {
  margin-right: 1rem;
  margin-left: -.7rem;

  & .avatar {
    border-radius: 50%;

    width: 3.2rem;
    height: 3.2rem;
  }
}

.comments_holder__comment {
  display: flex;
  margin: 2rem 0;
}

.comment_title {
  &__username {
    font-size: 140%;
    font-weight: bold;
    margin-right: .5rem;
  }

  &__datetime {
    //font-size: 120%;
    margin-left: .5rem;
    color: gray;
  }
}

.comment_body__comment_text {
  margin-top: .5rem;
  padding: 1rem;
  width: max-content;

  background-color: white;
  border-radius: .3rem;
  box-shadow: 0 0 .2rem rgba(0, 0, 0, 0.4);

  & .comment_text {
    font-size: 130%;
    color: black;
  }
}
</style>