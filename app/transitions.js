//import { animate, stop } from "liquid-fire";

export default function(){

  //Feed -> Post
  // this.transition(
  //   this.fromRoute('profile.index'),
  //   this.toRoute('profile.post'),
  //   this.use('toLeft'),
  //   this.reverse('toRight', {duration:500})
  // );

  //Post -> Edit Post
  this.transition(
    this.fromRoute('profile.post.index'),
    this.toRoute('profile.post.edit'),
    this.use('toLeft', {easing:'spring'}),
    this.reverse('toRight', {easing:'spring'})
  );

  //Profile -> 
  this.transition(
    this.fromRoute('profile.index'),
    this.toRoute('profile.likes'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('profile.index'),
    this.toRoute('profile.followers'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('profile.index'),
    this.toRoute('profile.follows'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
 
  
}