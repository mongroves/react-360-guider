// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface, Module } from 'react-360-web';


function init(bundle, parent, options = {}) {
  r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    nativeModules: [
      new surfaceModule()
    ],
    ...options,
  });

  // The first surface
  const sphereSurface = new Surface(100, 100, Surface.SurfaceShape.Flat);
  sphereSurface.setAngle(0.2, 0); 

  // The second surface
  const surface2 = new Surface(100, 100, Surface.SurfaceShape.Flat);
  surface2.setAngle(Math.PI / 2, 0);

  // The third surface
  const surface3 = new Surface(100, 100,Surface.SurfaceShape.Flat);
  surface3.setAngle(-Math.PI / 2, 0);

  // The fourth surface
  const surface4 = new Surface(100, 100, Surface.SurfaceShape.Flat);
  surface4.setAngle(3.6, 0);

  // Render the first surface
  r360.renderToSurface(
    r360.createRoot('InfoPanel', {
      name: 'Simple surface',
      id:'surface1'
    }),
    sphereSurface
  );

  // Render the second surface
  r360.renderToSurface(
    r360.createRoot('InfoPanel', {
      name: 'Simple surface',
      id:'surface2'
    }),
    surface2
  );

  // Render the third surface
  r360.renderToSurface(
    r360.createRoot('InfoPanel', {
      name: 'Simple surface',
      id:'surface3'
    }),
    surface3
  );

  // Render the fourth surface
  r360.renderToSurface(
    r360.createRoot('InfoPanel', {
      name: 'Simple surface',
      id:'surface4'
    }),
    surface4
  );

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('Guider', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

export class surfaceModule extends Module{
  constructor() {
    super('This module');
  }
  start() {

    
  }
}


window.React360 = {init};
