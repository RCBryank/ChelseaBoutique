import { Component } from '@angular/core';
import { Footer } from "../../sections/footer/footer";
import { MenuHomepage } from "../../sections/menu-homepage/menu-homepage";
import { HomepageBigpanelItem } from '../../ui/homepage-bigpanel-item/homepage-bigpanel-item';
import { Banner } from "../../ui/banner/banner";
import { SectionVideo } from "../../ui/section-video/section-video";
import { PopularProduct } from "../../ui/popular-product/popular-product";
import { PopularProductRight } from "../../ui/popular-product-right/popular-product-right";
import { BannerPageEnd } from "../../ui/banner-page-end/banner-page-end";

@Component({
  selector: 'app-homepage',
  imports: [Footer, MenuHomepage, HomepageBigpanelItem, Banner, SectionVideo, PopularProduct, PopularProductRight, BannerPageEnd],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {
  
}
