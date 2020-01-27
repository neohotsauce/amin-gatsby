import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import IndexPagePreview from "./preview-templates/IndexPagePreview";
import AboutPagePreview from "./preview-templates/AboutPagePreview";
import ServicesPagePreview from "./preview-templates/ServicesPagePreview";
import ProjectsPagePreview from "./preview-templates/ProjectsPagePreview";
import DevelopmentPostPreview from "./preview-templates/DevelopmentPostPreview";
import NewsPostPreview from "./preview-templates/NewsPostPreview";
import ContactPagePreview from "./preview-templates/ContactPagePreview";
import BrandsPagePreview from "./preview-templates/BrandsPagePreview";
import AchievementsPagePreview from "./preview-templates/AchievementsPagePreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("services", ServicesPagePreview);
CMS.registerPreviewTemplate("projects", ProjectsPagePreview);
CMS.registerPreviewTemplate("developments", DevelopmentPostPreview);
CMS.registerPreviewTemplate("news", NewsPostPreview);
CMS.registerPreviewTemplate("contact", ContactPagePreview);
CMS.registerPreviewTemplate("brands", BrandsPagePreview);
CMS.registerPreviewTemplate("achievements", AchievementsPagePreview);
