export const categories = [
    {value: "technology", label: "technology"},
    {value: "strategy", label: "strategy"},
    {value: "design", label: "design"},
    {value: "advertising", label: "advertising"},
    {value: "commerce", label: "commerce"},
    {value: "media", label: "media"},
    {value: "branding", label: "branding"},
    {value: "digital marketing", label: "digital marketing"},
    {value: "content", label: "content"},
    {value: "data intelligence", label: "data intelligence"},
    {value: "marketing", label: "marketing"},
];

export const getCategories = () => {
    return categories.filter(c => c);
}