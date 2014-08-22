# Require any additional compass plugins here.
require 'compass/import-once/activate'
require 'toolkit'
require 'modular-scale'
require 'susy'
require 'breakpoint'

# File system locations
http_path             = 'themes/hybrid-base/'
css_dir                  = 'themes/hybrid-base/styles/css'
fonts_dir               = 'themes/hybrid-base/fonts'
images_dir          = 'themes/hybrid-base/images'
javascript_dir      = 'themes/hybrid-base/scripts/js'
sass_dir                = 'themes/hybrid-base/styles/scss'

# Set to true for easier debugging
line_comments         = false
# preferred_syntax      = :sass

# CSS output style - :nested, :expanded, :compact, or :compressed
output_style          = :expanded

# Determine whether Compass asset helper functions generate relative
# or absolute paths
relative_assets       = true

add_import_path  "themes/hybrid-base/components/"
