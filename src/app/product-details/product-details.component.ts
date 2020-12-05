import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "../products";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product; //field variable

  //constructor used for DI
  constructor(
    private route: ActivatedRoute //Dependency Injection
  ) {}

  //LifeCycle Hook
  ngOnInit() {
    //call a get API
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get("productId")];
    });
  }
}
