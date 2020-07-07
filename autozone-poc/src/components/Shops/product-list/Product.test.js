import React from 'react';
import renderer from "react-test-renderer";
import { shallow, render } from "enzyme";
import Product from './Product';

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

describe("Render Product Component", () => {
    const product = shallow(<Product />);
    it("Renders without crashing", ()=> {
        shallow(<Product />);
    });

    it("set product image with source", () => {
        expect(product.find("img").at(0)).toBeTruthy();
    });

    it("SnapShot Match", () => {
        const page = renderer.create(<Product/>).toJSON();
        expect(page).toMatchSnapshot();
    });

    it("check offer badge", () => {
        expect(product.find("span").first().text()).toBe("");
    });

    it("check favorite product", () => {
        const productPage = render(<Product />)
        expect(product.find("a").at(0)).toBeTruthy();
        // expect(productPage.getByTestClass('favme fa fa-heart')).toHaveStyle()
        // expect(product.find("a").first().text()).toBe("");
    });

    it("check product description", () => {
        expect(product.find("span").at(1).text()).toBe("");
    });

    it("check product price", () => {
        expect(product.find("span").at(2).text()).toBe("$");
    });

    
});

afterEach(() => {
    container.remove();
    container = null;
  });