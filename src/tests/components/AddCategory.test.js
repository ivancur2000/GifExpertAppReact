import React from 'react';
import { shallow } from "enzyme"
import AddCategory from '../../components/AddCategory';


describe('Pruebas en el componente AddCategory', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);
    beforeEach(() =>{
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('debe de mostrarse correctamente AddCategory ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar el input text', () => {
       const input = wrapper.find('input');
       const value = 'Coco';
       input.simulate('change', {target:{ value }});
       expect(wrapper.find('p').text().trim()).toBe(value);
    });
    
    test('no debe de postear la funcion onSubmit',()=>{
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Spider';
        wrapper.find('input').simulate('change', { target: {value} })
        wrapper.find('form').simulate('submit', { preventDefault(){} })
        expect( setCategories ).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value')).toBe('');
    });
    

})
