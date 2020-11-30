export const industries = [
    {value: "agriculture & food", label: "agriculture & food"},
    {value: "b2b", label: "b2b"},
    {value: "banking, finance & insurance", label: "banking, finance & insurance"},
    {value: "consumer goods & services", label: "consumer goods & services"},
    {value: "education", label: "education"},
    {value: "energy & utilities", label: "energy & utilities"},
    {value: "fashion & lifestyle", label: "fashion & lifestyle"},
    {value: "health & life science", label: "health & life science"},
    {value: "logistics & transport", label: "logistics & transport"},
    {value: "manufacturing & industrials", label: "manufacturing & industrials"},
    {value: "public service & non-profit", label: "public service & non-profit"},
    {value: "retail & commerce", label: "retail & commerce"},
    {value: "tech, media & telecommunications", label: "tech, media & telecommunications"},
    {value: "travel, leisure & hospitality", label: "travel, leisure & hospitality"},
];

export const getIndustries = () => {
    return industries.filter(i => i);
}