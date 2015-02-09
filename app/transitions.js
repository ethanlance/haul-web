import { animate, stop } from "liquid-fire";

export default function(){

  //Feed -> Post
  this.transition(
    this.fromRoute('seller.index'),
    this.toRoute('seller.product'),
    this.use('toLeft'),
    this.reverse('toRight', {duration:500})
  );

  //Post -> Edit Post
  this.transition(
    this.fromRoute('seller.product.index'),
    this.toRoute('seller.product.edit'),
    this.use('toLeft', {easing:'spring'}),
    this.reverse('toRight', {easing:'spring'})
  );
};