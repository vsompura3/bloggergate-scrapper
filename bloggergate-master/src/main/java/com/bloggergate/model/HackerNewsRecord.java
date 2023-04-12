package com.bloggergate.model;

import java.util.List;

public record HackerNewsRecord(
        Integer id,
        Integer blog_id,
        String blog_title,
        String blog_url,
        Integer score,
        String uploader,
        String date_uploaded,
        String time_elapsed,
        Integer comments_count,
        String uploader_profile_url,
        String site_from,
        List<String> tags) {

}
