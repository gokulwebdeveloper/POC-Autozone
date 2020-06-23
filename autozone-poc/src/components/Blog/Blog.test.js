import React from 'react'; 
import {shallow} from 'enzyme';
import Blog from "./Blog.js";
import blogImg from "../../utlis/img/bg-img/blog1.jpg";

describe("renders component with image", () => {
    it("renders an image", () => {
        const blog = shallow(<Blog />);

    expect(blog.find("img").at(0).prop("src")).toEqual(blogImg);
     });
 });