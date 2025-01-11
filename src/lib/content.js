let page = [
    {
        id: "nav_wrapper",
        type: "nav",
        content: null,
        props: {
            style: {
                display: "flex",
                justifyContent: "space-between",
                padding: "20px 40px",
                alignItems: "center",
                position: "fixed",
                width: "100%",
                backgroundColor: "white",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            },
            id: "nav_wrapper",
        },
        children: [
            {
                id: "logo",
                type: "h1",
                content: "SketchFree",
                props: {
                    style: {
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "#333",
                    },
                },
            },
            {
                id: "nav_links",
                type: "div",
                content: null,
                props: {
                    style: {
                        display: "flex",
                        gap: "24px",
                        alignItems: "center",
                    },
                },
                children: [
                    {
                        id: "link_1",
                        type: "a",
                        content: "Features",
                        props: {
                            href: "#features",
                            style: {
                                textDecoration: "none",
                                color: "#333",
                            },
                        },
                    },
                    {
                        id: "link_2",
                        type: "a",
                        content: "Pricing",
                        props: {
                            href: "#pricing",
                            style: {
                                textDecoration: "none",
                                color: "#333",
                            },
                        },
                    },
                    {
                        id: "cta_button",
                        type: "button",
                        content: "Get Started",
                        props: {
                            style: {
                                backgroundColor: "#007AFF",
                                color: "white",
                                padding: "10px 20px",
                                border: "none",
                                borderRadius: "6px",
                                cursor: "pointer",
                            },
                            id: "link_3",
                        },
                    },
                ],
            },
        ],
    },
    {
        id: "hero_section",
        type: "div",
        content: null,
        props: {
            style: {
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 40px",
                backgroundColor: "#f8f9fa",
            },
        },
        children: [
            {
                id: "hero_content",
                type: "div",
                content: null,
                props: {
                    style: {
                        maxWidth: "800px",
                        textAlign: "center",
                    },
                },
                children: [
                    {
                        id: "hero_title",
                        type: "h1",
                        content: "Build Something Amazing",
                        props: {
                            style: {
                                fontSize: "48px",
                                marginBottom: "24px",
                                color: "#1a1a1a",
                            },
                        },
                    },
                    {
                        id: "hero_subtitle",
                        type: "p",
                        content:
                            "Create stunning websites without writing code. Start your journey today.",
                        props: {
                            style: {
                                fontSize: "20px",
                                color: "#666",
                                marginBottom: "32px",
                            },
                        },
                    },
                    {
                        id: "hero_button",
                        type: "button",
                        content: "Get Started",
                        props: {
                            style: {
                                backgroundColor: "#007AFF",
                                color: "white",
                                padding: "10px 20px",
                                border: "none",
                                borderRadius: "6px",
                                cursor: "pointer",
                            },
                        },
                    },
                ],
            },
        ],
    },
    {
        id: "features_section",
        type: "section",
        content: null,
        props: {
            style: {
                padding: "80px 40px",
                backgroundColor: "white",
            },
        },
        children: [
            {
                id: "features_grid",
                type: "div",
                content: null,
                props: {
                    style: {
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "32px",
                        maxWidth: "1200px",
                        margin: "0 auto",
                    },
                },
                children: [
                    {
                        id: "feature_1",
                        type: "div",
                        content: null,
                        props: {
                            style: {
                                padding: "24px",
                                borderRadius: "12px",
                                backgroundColor: "#f8f9fa",
                            },
                        },
                        children: [
                            {
                                id: "feature_1_icon",
                                type: "div",
                                content: "🚀",
                                props: {
                                    style: {
                                        fontSize: "32px",
                                        marginBottom: "16px",
                                    },
                                },
                            },
                            {
                                id: "feature_1_title",
                                type: "h3",
                                content: "Lightning Fast",
                                props: {
                                    style: {
                                        fontSize: "24px",
                                        marginBottom: "12px",
                                    },
                                },
                            },
                            {
                                id: "feature_1_desc",
                                type: "p",
                                content:
                                    "Build and deploy in minutes, not hours.",
                                props: {
                                    style: {
                                        color: "#666",
                                    },
                                },
                            },
                        ],
                    },
                    {
                        id: "feature_1",
                        type: "div",
                        content: null,
                        props: {
                            style: {
                                padding: "24px",
                                borderRadius: "12px",
                                backgroundColor: "#f8f9fa",
                            },
                        },
                        children: [
                            {
                                id: "feature_1_icon",
                                type: "div",
                                content: "🚀",
                                props: {
                                    style: {
                                        fontSize: "32px",
                                        marginBottom: "16px",
                                    },
                                },
                            },
                            {
                                id: "feature_1_title",
                                type: "h3",
                                content: "Lightning Fast",
                                props: {
                                    style: {
                                        fontSize: "24px",
                                        marginBottom: "12px",
                                    },
                                },
                            },
                            {
                                id: "feature_1_desc",
                                type: "p",
                                content:
                                    "Build and deploy in minutes, not hours.",
                                props: {
                                    style: {
                                        color: "#666",
                                    },
                                },
                            },
                        ],
                    },
                    {
                        id: "feature_1",
                        type: "div",
                        content: null,
                        props: {
                            style: {
                                padding: "24px",
                                borderRadius: "12px",
                                backgroundColor: "#f8f9fa",
                            },
                        },
                        children: [
                            {
                                id: "feature_1_icon",
                                type: "div",
                                content: "🚀",
                                props: {
                                    style: {
                                        fontSize: "32px",
                                        marginBottom: "16px",
                                    },
                                },
                            },
                            {
                                id: "feature_1_title",
                                type: "h3",
                                content: "Lightning Fast",
                                props: {
                                    style: {
                                        fontSize: "24px",
                                        marginBottom: "12px",
                                    },
                                },
                            },
                            {
                                id: "feature_1_desc",
                                type: "p",
                                content:
                                    "Build and deploy in minutes, not hours.",
                                props: {
                                    style: {
                                        color: "#666",
                                    },
                                },
                            },
                        ],
                    },
                    // You can duplicate this feature block with different IDs and content
                ],
            },
        ],
    },
    {
        id: "testimonials",
        type: "section",
        content: null,
        props: {
            style: {
                padding: "80px 40px",
                backgroundColor: "#f8f9fa",
            },
        },
        children: [
            {
                id: "testimonials_container",
                type: "div",
                content: null,
                props: {
                    style: {
                        maxWidth: "1200px",
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: "column",
                        gap: "48px",
                    },
                },
                children: [
                    {
                        id: "testimonial_1",
                        type: "div",
                        content: null,
                        props: {
                            style: {
                                padding: "32px",
                                backgroundColor: "white",
                                borderRadius: "12px",
                                boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
                            },
                        },
                        children: [
                            {
                                id: "quote",
                                type: "p",
                                content:
                                    "This tool saved us countless hours of development time.",
                                props: {
                                    style: {
                                        fontSize: "18px",
                                        lineHeight: "1.6",
                                        marginBottom: "24px",
                                    },
                                },
                            },
                            {
                                id: "author_info",
                                type: "div",
                                content: null,
                                props: {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px",
                                    },
                                },
                                children: [
                                    {
                                        id: "author_avatar",
                                        type: "img",
                                        content: null,
                                        props: {
                                            src: null,
                                            style: {
                                                borderRadius: "50%",
                                            },
                                        },
                                    },
                                    {
                                        id: "author_details",
                                        type: "div",
                                        content: null,
                                        children: [
                                            {
                                                id: "author_name",
                                                type: "h4",
                                                content: "Sarah Johnson",
                                                props: {
                                                    style: {
                                                        fontSize: "16px",
                                                        fontWeight: "bold",
                                                    },
                                                },
                                            },
                                            {
                                                id: "author_role",
                                                type: "p",
                                                content: "CTO, TechStart",
                                                props: {
                                                    style: {
                                                        fontSize: "14px",
                                                        color: "#666",
                                                    },
                                                },
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

module.exports = page;
