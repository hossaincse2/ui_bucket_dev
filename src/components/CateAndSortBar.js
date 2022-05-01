import React from "react";
import CategorySorting from "./CategorySorting";
import Container from "./Container";
import ShortBy from "./ShortBy";

export default function CateAndSortBar() {
  return (
    <section className="">
      <Container>
        <div className="bg-[#F0F4FF] p-5 rounded-md">
          <div className="flex justify-between items-center">
            <div className="left">
              <select
                name=""
                id=""
                className="rounded-full border-gray focus:border-transparent focus:ring-0"
              >
                <option value="">Agency</option>
                <option value="">Portfolio</option>
                <option value="">Business</option>
                <option value="">Architecture</option>
                <option value="">Online Store</option>
                <option value="">Food & Restaurants</option>
                <option value="">Blog & Magazine</option>
                <option value="">Entertainment</option>
              </select>
            </div>
            <div className="right">
              <div className="flex items-center gap-x-4">
                <div>
                  <select
                    name=""
                    id=""
                    className="rounded-full border-gray focus:border-transparent focus:ring-0"
                  >
                    <option value="">Updated</option>
                    <option value="">New</option>
                    <option value="">Business</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
