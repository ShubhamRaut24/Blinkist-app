import React from 'react';
import BookInfoComponent from ".";

import renderer from 'react-test-renderer';

const library =[
     {
        "currentlyReading": [
          {
            "id": 11,
            "progress": 65
          },
          {
            "id": 4,
            "progress": 90
          },
          {
            "id": 3,
            "progress": 0
          }
        ],
        "finishedBook": [
          {
            "id": 9
          },
          {
            "id": 6
          },
          {
            "id": 10
          },
          {
            "id": 8
          },
          {
            "id": 1
          },
          {
            "id": 5
          }
        ]
      },
    ]

test('BookInfo Component', () => {
    const component = renderer.create(
            <BookInfoComponent library={library}></BookInfoComponent>
    );
    expect(component).toMatchSnapshot();
});