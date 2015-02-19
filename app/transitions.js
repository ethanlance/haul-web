//import { animate, stop } from "liquid-fire";

export default function(){

  //Feed -> Post
  this.transition(
    this.fromRoute('profile.index'),
    this.toRoute('profile.post'),
    this.use('toLeft'),
    this.reverse('toRight', {duration:500})
  );

  //Post -> Edit Post
  this.transition(
    this.fromRoute('profile.post.index'),
    this.toRoute('profile.post.edit'),
    this.use('toLeft', {easing:'spring'}),
    this.reverse('toRight', {easing:'spring'})
  );

  this.transition(
    this.fromRoute('profile.index'),
    this.toRoute('new-post'),
    this.use('toLeft'),
    this.reverse('toRight', {duration:500})
  );
  
}