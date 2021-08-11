import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";


describe('Prueba del componente GifExpertApp',()=>{

    test('debe mostrar el snapShot', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe mostrar la lista de categorias', () => {
        
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    });
    

});