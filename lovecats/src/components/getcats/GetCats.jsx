import React, { 
    Component, 
    Suspense, 
    lazy } 
from 'react';
import '../../styles/getcats.modules.css';

import CatDialog from './CatDialog';
import { fetchCats, fetchCatImage } from '../../backend/getCats';
const CatList = lazy(() => import('./CatList'));

import RenderCat from './RenderCats';

class Cats extends Component {
    state = {
        isDialogOpen: false,
        data: [],
        selectedCat: [],
        url: [],
    }

    openDialog = (cat) => {
        setTimeout(() => {
            this.setState({
                isDialogOpen: true,
                selectedCat: cat,
                url: cat.img.url,
            })
        }, 300); 
    }

    closeDialog = () => {
        this.setState({
            isDialogOpen: false,
        })
    }

    componentDidMount() {
        fetchCats().then(async (res) => {
            const imagePromises = res.map((cat) => {
                return fetchCatImage(cat.id).then((img) => {
                    return {...cat, img};
                });
            });
    
            const arr = await Promise.all(imagePromises);

            const filteredRes = arr.filter(cat => cat.img !== undefined);

            this.setState({
                data: filteredRes,
            });
        });
    }

    render() {
        const { data } = this.state;
        return (
            <div className='getcats-container'>
                <div className='getcats-content'>
                    <div>
                        <h1>Select your cat!</h1>
                    </div>
                    <div className='catlist-container'>
                        <Suspense fallback={<h1>Loading...</h1>}>
                            {data.map((cat) => {
                                return (
                                    <div key={cat.id}>
                                        <CatList 
                                            onClick={() => {
                                                this.openDialog(cat)
                                            }}
                                            cat={cat}
                                        />
                                    </div>
                                )
                            })}
                        </Suspense>
                    </div>
                </div>
                <CatDialog 
                    open={this.state.isDialogOpen}
                    onClose={this.closeDialog}
                    selectedCat={this.state.selectedCat}
                    selectedCatUrl={this.state.url}
                />
            </div>
        )
    }
}

export default Cats;