import { getGifs } from "../../helpers/getGifs";


describe('Pruebas en el helper getGifs', ()=>{

    test('debe retornar 10 elementos', async () => {
       const gifs = await getGifs('spiderman'); 
       expect(gifs.length).toBe(10);
    });
    
    test('debe retornar ningun elemento al pasarle nada', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    })
    

});