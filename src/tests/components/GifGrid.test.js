import React from 'react'; 
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el componente GifGrid', ()=>{

    const category = 'One Punch';
    
    test('el componete debe mostrarse correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const wrapper = shallow(<GifGrid category={ category }/>);
        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe mostrar data del useFetch', ()=>{


        const gifs = [{
            id: '123',
            url: 'http://localhost.imh2',
            title: 'ImageTest',
        }];
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        const wrapper = shallow(<GifGrid category={ category }/>);
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });

});