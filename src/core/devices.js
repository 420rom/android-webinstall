const DEVICE_NAMES = {
    oriole: "Pixel 6",
    raven: "Pixel 6 Pro",
};

export function getDeviceName(device) {
    return device in DEVICE_NAMES ? DEVICE_NAMES[device] : device;
}
