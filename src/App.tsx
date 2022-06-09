import React from 'react';
import {Slider} from "./components/slider/slider";

function App() {
  return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
      >
        <Slider reviews={
            [
                {
                    id: 1,
                    name: 'Ангелина Константинова',
                    text: 'Великолепное приложение - постоянно пользуюсь!',
                    jobPosition: 'Web designer',
                    image: 'https://c.wallhere.com/photos/09/5f/women_model_blonde_blue_eyes_women_outdoors_depth_of_field_looking_at_viewer-145978.jpg!d'
                },
                {
                    id: 2,
                    name: 'Изабелла Данилова',
                    text: 'Одно из лучших приложений, что я скачивала!',
                    jobPosition: 'Backend developer',
                    image: 'https://c.wallhere.com/photos/c5/8d/Victoria_Justice_women_brunette_open_mouth_women_outdoors-205258.jpg!d'
                }
            ]
        }
        />
      </div>
  );
}

export default App;
