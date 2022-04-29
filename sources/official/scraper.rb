#!/bin/env ruby
# frozen_string_literal: true

require 'every_politician_scraper/scraper_data'
require 'open-uri/cached'
require 'pry'

class MemberList
  class Member
    field :name do
      noko.css('.radherra-list__item__name').text.tidy
    end

    field :position do
      noko.css('.radherra-list__item__title').text.tidy
    end
  end

  class Members
    def member_container
      noko.css('.radherra-list .radherra-list__item')
    end
  end
end

file = Pathname.new 'official.html'
puts EveryPoliticianScraper::FileData.new(file).csv
