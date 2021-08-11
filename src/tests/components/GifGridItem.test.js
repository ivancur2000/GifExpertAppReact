import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en GifGridItem', () => {
    
    const title = 'Image test';
    const url = 'https://localhost/image1';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('Debe rederizar correctamente el componente', () => {
        expect(wrapper).toMatchSnapshot(); 
    });
    
    test('Debe tener un parrafo con el titulo', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });
    
    test('debe tener una img igual a la de la URL', () => {
        const img = wrapper.find('img'); 
        expect(img.prop('src')).toBe(url); 
        expect(img.prop('alt')).toBe(title);
    });
    
    test('debe tener la clase animate_fadeIn', () => {
        const div = wrapper.find('div');
        // expect(div.hasClass('animate__fadeIn')).toBeTruthy();
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBeTruthy();

    })
    
});
