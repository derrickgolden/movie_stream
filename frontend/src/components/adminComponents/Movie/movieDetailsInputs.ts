export const movieDetailsInput = [
    { label: "Title", placeholder: "The Good Doctor", id: "title", type: "text", inputType: "input", required: true },
    { label: "Slug", placeholder: "http://12.0.0.100/watch/slug", id: "slug", type: "text", inputType: "input", required: true },
    { label: "Description", placeholder: "The Movie is about...", id: "description", type: "text", inputType: "textarea", required: true },
    { label: "Actor", placeholder: "Enter actor name", id: "actor", type: "text", inputType: "input", required: false },
    { label: "Director", placeholder: "Enter director name", id: "director", type: "text", inputType: "input", required: false },
    { label: "Writer", placeholder: "Enter writer name", id: "writer", type: "text", inputType: "input", required: false },
    { label: "IMDb Rating", placeholder: "Enter IMDb rating", id: "imdb_rating", type: "number", inputType: "input", required: false },
    { label: "Release Date", placeholder: "2024-12-07", id: "release_date", type: "date", inputType: "input", required: false },
    { label: "Country", placeholder: "Select Country", id: "country", type: "text", inputType: "select", required: false },
    { label: "Genre", placeholder: "Select Genre", id: "genre", type: "text", inputType: "select", required: false },
    { label: "Language", placeholder: "Enter language", id: "language", type: "text", inputType: "input", required: false },
    { label: "Video Type", placeholder: "Enter video type", id: "video_type", type: "text", inputType: "select", required: false },
    { label: "Runtime", placeholder: "Enter runtime", id: "runtime", type: "text", inputType: "input", required: true },
    { label: "Video Quality", placeholder: "HD", id: "video_quality", type: "text", inputType: "input", required: false },
    { label: "Publication", placeholder: "Enter publication", id: "publication", type: "text", inputType: "input", required: false },
    { label: "Enable Download", placeholder: "Enable download", id: "enable_download", type: "checkbox", inputType: "input", required: false },
    { label: "Free/Paid", placeholder: "Free", id: "free_paid", type: "text", inputType: "select", required: false },
    { label: "Trailer URL", placeholder: "YouTube Only", id: "trailer_url", type: "url", inputType: "input", required: false },
];

export const seoAndMarketingInput = [
    // {
    //     label: "Thumbnail",
    //     placeholder: "No file chosen",
    //     id: "backdrop_path",
    //     type: "file",
    //     inputType: "input",
    //     required: false,
    // },
    // {
    //     label: "Poster",
    //     placeholder: "No file chosen",
    //     id: "poster_path",
    //     type: "file",
    //     inputType: "input",
    //     required: false,
    // },
    {
        label: "SEO Title",
        placeholder: "Enter SEO Title",
        id: "seo_title",
        type: "text",
        inputType: "input",
        required: false,
    },
    {
        label: "Meta Description",
        placeholder: "Enter meta description",
        id: "meta_description",
        type: "text",
        inputType: "textarea",
        required: false,
    },
    {
        label: "Focus Keyword",
        placeholder: "Enter focus keyword, separated by commas",
        id: "focus_keyword",
        type: "text",
        inputType: "textarea",
        required: false,
    },
    {
        label: "Tags",
        placeholder: "Enter tags, separated by commas",
        id: "tags",
        type: "text",
        inputType: "textarea",
        required: false,
    },
    {
        label: "Send Email Newsletter to Subscriber",
        placeholder: "Check to send",
        id: "email_newsletter",
        type: "checkbox",
        inputType: "input",
        required: false,
    },
    {
        label: "Send Push Notification to Subscriber",
        placeholder: "Check to send",
        id: "push_notification",
        type: "checkbox",
        inputType: "input",
        required: false,
    },
];

export const UploadMovieInput = [
    { label: "Label", placeholder: "server #", id: "label", type: "text", inputType: "input", required: true },
    { label: "Order", placeholder: "0", id: "order", type: "number", inputType: "input", required: true },
    { label: "URL", placeholder: "https://moviepath.mp4", id: "url", type: "text", inputType: "input", required: true },
]