export let controls = {};

function easeOutQuad(x) {
    return 1 - (1 - x) * (1 - x);
}

window.addEventListener('keydown', (e) => {
    controls[e.code] = true;
});

window.addEventListener('keyup', (e) => {
    controls[e.code] = false;
});

let maxVelocity = 0.04;
let jawVelocity = 0;
let pitchVelocity = 0;
let planeSpeed = 0.006;

export let turbo = 0;

export function updatePlaneAxis(x, y, z, planePosition, camera) {
    jawVelocity *= 0.95;
    pitchVelocity *= 0.95;

    if (Math.abs(jawVelocity) > maxVelocity) {
        jawVelocity = maxVelocity * Math.sign(jawVelocity);
    }

    if (Math.abs(pitchVelocity) > maxVelocity) {
        pitchVelocity = maxVelocity * Math.sign(pitchVelocity);
    }

    if (controls['ArrowLeft']) {
        jawVelocity = 0.02;
    }

    if (controls['ArrowRight']) {
        jawVelocity = -0.02;
    }

    if (controls['ArrowUp']) {
        pitchVelocity = 0.02;
    }

    if (controls['ArrowDown']) {
        pitchVelocity = -0.02;
    }

    x.applyAxisAngle(z, jawVelocity);
    y.applyAxisAngle(z, jawVelocity);

    y.applyAxisAngle(x, pitchVelocity);
    z.applyAxisAngle(x, pitchVelocity);

    x.normalize();
    y.normalize();
    z.normalize();

    // plane position & velocity
    if (controls['ShiftLeft']) {
        turbo += 0.025;
    } else {
        turbo *= 0.95;
    }
    turbo = Math.min(Math.max(turbo, 0), 1);

    let turboSpeed = easeOutQuad(turbo) * 0.02;

    camera.fov = 45 + turboSpeed * 900;
    camera.updateProjectionMatrix();


    planePosition.add(z.clone().multiplyScalar(-planeSpeed - turboSpeed));
}